import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { Colors } from "../../Schemes/Colors"

const ImageLoader = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor={Colors.backgroundColorForLoader}
        foregroundColor={Colors.foregroundColorForLoader}
        {...props}
    >
        <Circle cx="200" cy="80" r="41" />
    </ContentLoader>
)

export default ImageLoader