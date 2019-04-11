import React from 'react';
import { Sparklines, SparklinesLine ,SparklinesSpots ,SparklinesReferenceLine} from "react-sparklines";

const Graph = ({color,height,width,data}) => {
    return (
        <>
            <Sparklines height={height} width={width} data={data}>
                <SparklinesLine color={color} />
                <SparklinesSpots />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
        </>
    );
};

export default Graph;
