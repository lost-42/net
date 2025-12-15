import React, { useRef, useEffect } from "react";
import {
    RGOptions,
    RGJsonData,
    RGNode,
    RGUserEvent,
    RGLine,
    RGLink,
    RelationGraphComponent,
} from "relation-graph-react";
import RelationGraph, { RelationGraphInstance } from "relation-graph/react";
import "./slot.scss";
import graphJsonData from "./city/data";

const NodeSlot = ({ node }: { node: RGNode }) => {
    return (
        <div className="my-node">
            <div className="my-node-main">
                <img className="c-person-pic" src={node.data.pic} />
            </div>
            <div className="my-node-text">{node.text}</div>
        </div>
    );
};

interface UserSlotProps {
    customData?: any;
}

const UserSlot = ({ customData }: UserSlotProps) => {
    const graphRef = useRef<RelationGraphComponent | null>(null);
    const graphOptions: RGOptions = {
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        defaultLineColor: "#c71585",
        defaultJunctionPoint: "border",
        defaultNodeColor: "#67C23A",
        defaultNodeShape: 0,
        defaultNodeWidth: 110,
        defaultNodeHeight: 110,
        lineUseTextPath: true,
        defaultLineShape: 5,
        defaultLineWidth: 2,
        moveToCenterWhenRefresh: true,
        zoomToFitWhenRefresh: true,
        layout: {
            layoutName: "force",
        },
    };

    useEffect(() => {
        showGraph();
    }, [customData]);

    const showGraph = () => {
        if (!graphRef.current) {
            console.error("Graph reference is not available");
            return;
        }
        const __graph_json_data: RGJsonData = customData || graphJsonData;
        const graphInstance = graphRef.current.getInstance();
        graphInstance.setJsonData(__graph_json_data);
    };

    return (
        <div>
            <div className="my-slot-1" style={{ height: "100vh" }}>
                <RelationGraph ref={graphRef} options={graphOptions} nodeSlot={NodeSlot}></RelationGraph>
            </div>
        </div>
    );
};

export default UserSlot;

// CSS styles remain the same
