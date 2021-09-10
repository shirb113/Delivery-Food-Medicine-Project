import './contextMenu.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';



const ContextMenu = ({ initialState, handleClick, state, setState, handleDelMsg, getCopyElement }) => {

    const handleClose = () => {
        setState(initialState);
    };

    const copyToClipboard = () => {
        const elementId = getCopyElement()
        var range = document.createRange();
        range.selectNode(document.getElementById(elementId));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect 
        handleClose()
    }
    
    return <>
        <Menu
            onContextMenu={(e) => {
                e.preventDefault()
                handleClose()
                handleClick(e)
            }}
            open={state.mouseY !== null}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={
                state.mouseY !== null && state.mouseX !== null
                    ? { top: state.mouseY, left: state.mouseX }
                    : undefined
            }
        >
            <MenuItem onClick={() => copyToClipboard("textToCopy")} >
                <FileCopyOutlinedIcon /><a style={{ left: '5px', position: 'inherit' }}>Copy</a>
            </MenuItem>
            {handleDelMsg ? <MenuItem onClick={() => {
                handleDelMsg()
                handleClose()
            }}>
                <DeleteOutlineOutlinedIcon /><a style={{ left: '5px', position: 'inherit' }}>Delete</a>
            </MenuItem> : ''}
        </Menu>

    </>
}

export default ContextMenu

