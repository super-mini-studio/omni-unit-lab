type InternalDiagramProps = {
    loc: string;
    prettyLoc: string;
    children: JSX.Element;
};

export function InternalSection({
    children,
    loc,
    prettyLoc
}: InternalDiagramProps) {
    
    return (
        <>
            <slot>
                {children}
            </slot>
        </>
    )
}