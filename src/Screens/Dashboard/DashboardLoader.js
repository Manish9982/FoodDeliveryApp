import React from 'react'
import ContentLoader, { Rect, Circle, Path } from 'react-content-loader/native'
import { Colors } from '../../Schemes/Colors'
import { useWindowDimensions } from 'react-native'
const DashboardLoader = (props) => {
    const { height, width } = useWindowDimensions()
    return (
        <ContentLoader
            speed={2}
            width={width}
            height={height}
            backgroundColor={Colors.backgroundColorForLoader}
            foregroundColor={Colors.foregroundColorForLoader}
            {...props}
        >
            <Rect x={width * 0.05} y={height * 0.1} rx='0' ry='0' width={width * 0.9} height={height * 0.1} />
            <Rect x={width * 0.05} y={height * 0.3} rx='0' ry='0' width={width * 0.9} height={height * 0.16} />
            <Rect x={width * 0.05} y={height * 0.5} rx='0' ry='0' width={width * 0.9} height={height * 0.16} />
            <Rect x={width * 0.05} y={height * 0.7} rx='0' ry='0' width={width * 0.9} height={height * 0.16} />
        </ContentLoader>
    )

}

export default DashboardLoader