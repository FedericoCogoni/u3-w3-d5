import React from "react"

const ArtistCard = ({ artist }) => {
  return (
    <div className="text-center">
      <div className="card bg-transparent" style={{ maxWidth: "306px" }}>
        <img className="card-img-top img-fluid" src={artist.picture_medium} alt="Artist" />
        <div
          className="card-body"
          style={{
            color: "white",
            border: "none",
          }}
        >
          <h5 className="card-title">Artist: {artist.name}</h5>
        </div>
      </div>
    </div>
  )
}

export default ArtistCard
