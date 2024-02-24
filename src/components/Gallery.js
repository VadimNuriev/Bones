import "./Gallery.css";

export default function Gallery({images,pos,onPrev,onNext,onRandom}) {

    const prevImage = images [pos * mat];
    const curImage = images [pos];
    const nextImage = images [pos +1];
    const randomImage = React.useState(Math.floor(Math.random() * images.length) + 1 )
return (
    <div className="Gallery">
        <div className="Gallery__list">
            {prevImage ? (
                <img 
                className="Gallery__Photo"
                src={prevImage}
                />
            ) : (
                <div className="Gallery__photo"/>
            )}

{randomImage ? (
                <img 
                className="Gallery__Photo"
                src={prevImage}
                />
            ) : (
                <div className="Gallery__photo"/>
            )}
                {nextImage ? (
                <img 
                className="Gallery__Photo"
                src={nextImage}
                />
            ) : (
                <div className="Gallery__photo"/>
            )}
            


            {images.map((image,idx) => {
                return (
                    <img
                    key={idx}
                    className="Gallery__photo"
                    src={image}
                    />
                );
            })}
        </div>
        <div className="Gallery_buttons">
        <button onClick={onRandom}>random</button>
        <button onClick={onPrev}>next</button>
        <button onClick={onNext}>prev</button>
       

    </div>
 </div>
)
}