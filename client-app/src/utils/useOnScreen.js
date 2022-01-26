import { useState, useEffect } from "react";

export default function useOnScreen(ref, onVisible) {
    const [isIntersecting, setIntersecting] = useState(false)
    
    const observer = new IntersectionObserver(
        (entries) => {
            const [entry] = entries;
            console.log(entries)
            setIntersecting(entry.isIntersecting)
            if(entry.isIntersecting) {
                onVisible();
            }
        }
    )
    
    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current)
        } else {
            observer.disconnect()
        }
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])
    
    return isIntersecting
}