
export default function Tabs({children, buttons, ButtonsContiner = 'menu'}){
    return <>
    <ButtonsContiner>
        {buttons}
    </ButtonsContiner>
    
    {children}
    
    </>
}