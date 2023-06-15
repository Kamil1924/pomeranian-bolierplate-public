import './Tile.css';

export const Tile = (props) => {
    let { children, isActive, onClick } = props
    let c = ''
    if (isActive) {
        c = 'tile-active'
    }

    return (
        <button
            className={'tile ' + c}

            onClick={onClick}
        >
            {children}
        </button >
    )

}

