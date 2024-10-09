import ReactCurvedText from 'react-curved-text';

const Rotatebutton = () => {
    return (
        <ReactCurvedText
            width={300}
            height={300}
    
            cx={150}
            cy={150}
            rx={90}
            ry={90}
            startOffset={20}
            reversed={false}
            text="RESERVE YOUR TABLE FOR THE BEST MEMORIES SAVE IN "
            textProps={{ style: { fontSize: 15, fill: 'white', letterSpacing: 5, fontWeight: 'lighter', } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{
                style: {
                
                }
            }}
        />
    );
};

export default Rotatebutton;