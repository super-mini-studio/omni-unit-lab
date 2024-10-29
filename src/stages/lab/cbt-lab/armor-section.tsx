
type ArmorDiagramProps = {
    loc: string;
    prettyLoc: string;
    children: JSX.Element;
};

export function ArmorSection({
    children,
    loc, 
    prettyLoc
}: ArmorDiagramProps) {
    
    return (
        <>
            <slot>
                {children}
            </slot>
        </>
    )
}