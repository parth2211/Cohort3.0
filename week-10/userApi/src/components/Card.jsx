export function Card({children}) {
    return (
        <div style={{width: 150, height: 180, backgroundColor: '#e6f2e6', border: '2px solid', padding: 10, margin: 10,
        borderRadius: '5px'}}>
            <div>
                {children}
            </div>
        </div>
    )
}