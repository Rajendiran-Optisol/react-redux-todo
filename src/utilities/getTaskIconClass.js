import todoStatus from '../constants/todoStatus';

export default function (status) {
    switch(status) {
        case todoStatus.STARTED:
            return "fa-hourglass-start";
        case todoStatus.FINISHED:
            return "fa-list-alt";
        default:
            return "fa-clock-o";
    }
}
