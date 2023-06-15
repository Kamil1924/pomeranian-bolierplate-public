import './InGameButton.css';

export const inGameButton = (props) => {
    let { children, isActive, onClick } = props
    let c = ''
    if (isActive) {
        c = 'button-active'
    }

    return (
        <button
            className={'inGameButton ' + c}

            onClick={onClick}
        >
            {children}
        </button >
    )

}


