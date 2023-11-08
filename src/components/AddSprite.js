import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { drag } from '../utils/dragAndDrop';
import AddIcon from '@mui/icons-material/Add';
import { addTab, switchTab } from '../redux/slice';

function AddSprite() {

    const dispatch = useDispatch();
    const tabs = useSelector((store) => store.slice.tabs);
    const currentTab = useSelector((store) => store.slice.currentTab);

    const getName = (id) => {
        const integers = id.match(/(\d+)/);
        return 'Sprite ' + integers[0];
    };

    const toggleTab = (e) => {
        dispatch(switchTab(e.target.dataset.tab));
    };

    const addTabs = () => {
        if (tabs.length > 4) return;
        dispatch(addTab());
    };
    return (
        <>
            <div className="relative">
                <div
                    onDragStart={drag}
                    onClick={toggleTab}
                    className="border-b border-gray-300 w-full flex flex-no-wrap overflow-x-auto items-start scrolling-touch"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            draggable
                            data-tab={tab}
                            id={'sprite-' + tab}
                            className={`${tab === currentTab ? 'bg-green-500' : 'bg-blue-400 hover:bg-blue-500'}  text-white font-bold py-2 px-4 mr-1 inline-flex items-center`}
                        >
                            {getName(tab)}
                        </button>
                    ))}
                </div>


                <div
                    onClick={addTabs}
                    className="py-1 px-3 absolute top-0 right-0"
                >
                    <AddIcon sx={{color:'#EF4444'}} />
                </div>
            </div>
        </>
    );
}

export default AddSprite;
