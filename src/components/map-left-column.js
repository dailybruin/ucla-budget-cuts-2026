import "./map-left-column.css";

/* image section */
function MapImage({ image }) {
    return (
        <div className="map-image-container">
            <img src={image} alt="Map visual" />
        </div>
    );
}

/* left column of the map section */
export default function LeftColumn({ defaultProps }) {
    return (
        <div className="left-column-container">
            <MapImage
                image={defaultProps.map_image}
            />
        </div>
    );
}

