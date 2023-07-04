import './SettingButton.css';

export const Button = (props) => {
    let { children, isActive, onClick } = props
    let c = ''
    if (isActive) {
        c = 'activeButton'
    }

    return (
        <button
            className={'settingButton ' + c}

            onClick={onClick}
        >
            {children}
        </button >
    )

}


