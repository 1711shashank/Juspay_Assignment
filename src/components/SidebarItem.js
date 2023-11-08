import React from 'react';
import { drag } from '../utils/dragAndDrop';
import { getBlockColor } from '../utils/utility';

const SidebarItem = ({ title, data }) => {

    const removeCmdText = (text) => {
        return text.split(' ').map((word, index) => (
            word.startsWith('$')
                ? <span key={index} style={{ display: 'none' }}>{word}</span>
                : <span key={index}>{word} </span>
        ));
    }

    return (
        <>
            <div className="font-bold"> {title} </div>

            {data.map((_d, i) => (
                <div
                    draggable
                    onDragStart={drag}
                    id={title + i}
                    key={title + i}
                    className={`flex flex-row flex-wrap bg-${getBlockColor(title)}-500 text-white px-2 py-1 my-2 text-sm cursor-pointer`}
                >
                    <p>
                        {removeCmdText(_d.perIconText)}
                        {_d.icon}
                        {_d.postIconText}
                    </p>
                </div>
            ))}
        </>
    );
};

export default SidebarItem;
