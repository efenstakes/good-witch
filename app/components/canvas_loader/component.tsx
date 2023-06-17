import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = ()=> {
    const { progress } = useProgress()

    console.log("progress ", progress)

    if( progress == 100 ) {
        return (
            <></>
        )
    }
    return (
        <group>
            <Html
                center
                className='canvas_loader'
            >
                <h1>
                    {progress} %
                </h1>
                <p>
                    Loaded
                </p>
            </Html>
        </group>
    )
}

export default  CanvasLoader
