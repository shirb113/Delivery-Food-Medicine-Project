export const getChatMsgsOfUser = ({ chatMsgs, currentUser, connectedUser }) => {
    return chatMsgs.reduce((newList, msg) => {
        if ((msg.to === '*') || (msg.to === currentUser.fullName && msg.from === connectedUser.fullName) || (msg.from === currentUser.fullName && msg.to === connectedUser.fullName)) {
            newList.push(msg)
        }
        return newList
    }, [])
}