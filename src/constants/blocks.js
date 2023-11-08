import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import FlagIcon from '@mui/icons-material/Flag';


const blocks = {
    Motion: [
        {
            icon: ' ',
            perIconText: 'Move',
            postIconText: '10 steps',
        },
        {
            icon: <RedoIcon sx={{ color: 'darkgreen' }} />,
            perIconText: 'Turn $CW',
            postIconText: ' 45 degrees',
        },
        {
            icon: <UndoIcon sx={{ color: 'darkgreen' }} />,
            perIconText: 'Turn $ACW',
            postIconText: ' 45 degrees',
        },
    ],
    Looks: [
        {
            icon: ' ',
            perIconText: 'Say Hello for',
            postIconText: '2 seconds',
        },
        {
            icon: ' ',
            perIconText: 'Think Hmmm for',
            postIconText: '3 seconds',
        },
    ],
    Control: [
        {
            icon: ' ',
            perIconText: 'Wait',
            postIconText: '2 seconds',
        },
        {
            icon: ' ',
            perIconText: 'Wait',
            postIconText: '5 seconds',
        }
    ],
    Events: [
        {
            icon: <FlagIcon sx={{ color: 'darkgreen' }} />,
            perIconText: 'When',
            postIconText: 'Clicked',
        }
    ],


};

export default blocks;