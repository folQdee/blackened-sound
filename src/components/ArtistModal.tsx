import React from "react";

export interface ArtistInfo {
  name: string;
  tags: string[];
  url: string;
}

interface Props {
  artist: ArtistInfo | null;
  onClose: () => void;
}

// окошко для исполнителей
const ArtistModal: React.FC<Props> = ({ artist, onClose }) => {
  if (!artist) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{artist.name}</h2>
        {artist.tags.length > 0 && (
          <p>
            <strong>Жанры:</strong> {artist.tags.join(", ")}
          </p>
        )}
        <a href={artist.url} target="_blank" rel="noopener noreferrer">
          Перейти к исполнителю
        </a>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default ArtistModal;
