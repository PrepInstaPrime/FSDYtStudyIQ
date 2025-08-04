import React from 'react'

export default function CustomButton({styles,title}) {
  return (
    <>
    <button style={styles}>{title ||"Submit" }</button>
    </>
  )
}
