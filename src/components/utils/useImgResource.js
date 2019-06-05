import { useState, useEffect, useMemo } from 'react';

const getCloudinaryUrl = (filename, width = 250) => {
  const base = 'https://res.cloudinary.com/laurabaker/image/upload'
  const formats = {
    eco: `c_limit,f_auto,fl_apng.awebp,q_auto:low,w_${width}`,
    ecoFull: `c_limit,f_auto,fl_apng.awebp,q_auto:low,w_1024`,
    thumb: `c_limit,f_auto,fl_apng.awebp,q_auto,w_${width}`,
    med: 'c_limit,f_auto,fl_apng.awebp,q_auto:good,w_1024,h_1024',
    full: 'c_limit,f_auto,fl_preserve_transparency,h_2048,q_100,w_2048',
  }

  return Object.keys(formats).reduce((result, format) => {
    return {
      ...result,
      [format]: `${base}/${formats[format]}/${filename}`,
    }
  }, {})
}

const getCloudinaryFilenameFromFile = ({ hash, ext }) => `${hash}${ext}`

const loadImage = (src, fallbackOnError) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
      image.src = src
      image.onload = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            return resolve(src)
          })
        })
      }
      image.onerror = (error) => {
        if (fallbackOnError) {
          return resolve(fallbackOnError)
        }

        return reject(error)
      }
  })
}
 
export function useImgResource({ image, ref }, quality = 'full', loadingQuality = 'eco') {
  const imageUrls = useMemo(() => {
    return getCloudinaryUrl(
      getCloudinaryFilenameFromFile(image)
    )
  }, [image])
  const [imageLoadedUrl, setImageLoadedUrl] = useState(imageUrls[loadingQuality]);

  const loadImageState = useMemo(() => {
    return async () => {
      if (quality !== loadingQuality) {
        if (ref && ref.current) {
          ref.current.onload = () => {
            requestAnimationFrame(() => {
              requestAnimationFrame(async () => {
                setImageLoadedUrl(
                  await loadImage(imageUrls[quality], image.url),
                )
              })
            })
          }
        } else {
          setImageLoadedUrl(
            await loadImage(imageUrls[quality], image.url),
          )
        }
      }
    }
  }, [ref, image, quality, loadingQuality])

  useEffect(() => {
    loadImageState()
  }, [image])
  
  return imageLoadedUrl
}