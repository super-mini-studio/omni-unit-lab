import { JSX } from "react/jsx-runtime";

type pipTypes = 'armor' | 'structure';

interface pipProps {
    count: number,
    type: pipTypes
}

export function Pips({
    count,
    type
}: pipProps): JSX.Element {
    const pipArray: JSX.Element[] = [];

    const allPips = (count: number, type: pipTypes) => {

        for(let i = 0; i <= count; i++){
            let pipStroke = '#292929';
            if(type == 'structure'){
                pipStroke = '#706f6f'
            }
                      
            pipArray.push((
                <svg key={i} viewBox='0 0 10 10' xmlns="http://www.w3.org/2000/svg">
                    <circle cx='5' cy='5' r='5' fill='#d8d8d8' stroke={pipStroke}/>
                </svg>
            ))
            
        }
    }

    allPips(count, type);
    
    return (
        <>
            {pipArray.map(pip => pip)}
            {!count && (
                <span></span>
            )}
        </>
    )
}