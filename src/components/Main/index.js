import React, { useEffect, useState, createRef } from 'react'
import * as ml5 from 'ml5'
import md5 from 'js-md5'

const showResult = data => {
  const result = data => {
    return Array.from(data.predictions).map((item, index) => {
      return (
        <div key={index}>
          {item.label} at {item.confidence}
        </div>
      )
    })
  }
  return data.predictions.length > 0 ? result(data) : null
}

const Main = ({ imageFilePath }) => {
  const [data, setData] = useState({
    predictions: []
  })
  const ref = createRef()

  useEffect(() => {
    const classifyImg = async () => {
      // When the model is loaded
      const modelLoaded = () => {
        console.log('Model Loaded!')
      }

      // Initialize the Image Classifier method with MobileNet
      const classifier = ml5.imageClassifier('MobileNet', modelLoaded)

      // Put the image to classify inside a variable

      const image = ref.current //document.querySelector('.' + data.className)
      // Make a prediction with a selected image
      await classifier
        .predict(image, 5, (err, results) => {
          // print the result in the console
          console.log(results)
          return results
        })
        .then(results => {
          return setData({ predictions: results })
        })
    }
    classifyImg()
  }, [])

  return (
    <section>
      <img src={imageFilePath} alt='thing' ref={ref} width='400' />
      {showResult(data)}
    </section>
  )
}
export default Main
