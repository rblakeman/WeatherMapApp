import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine
} from 'react-sparklines';
import _ from 'lodash';

function average(data: number[]) {
    return _.round(_.sum(data) / data.length);
}

type Props = {
    color: string;
    data: number[];
    units: string;
};

export function Chart(props: Props) {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                {average(props.data)}
                {props.units}
            </div>
        </div>
    );
};
