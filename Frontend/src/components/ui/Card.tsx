import { ShareIcon } from "../Icons/ShareIcon";
interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div className="w-full max-w-md p-5 bg-white rounded-2xl shadow-lg border border-gray-100 transition hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3 text-lg font-semibold text-gray-800">
          <div className="w-5 h-5 text-gray-500">
            <ShareIcon />
          </div>

          <span>{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            <div className="w-5 h-5">
              <ShareIcon />
            </div>
          </a>
          <div className="w-5 h-5 text-gray-400">
            <ShareIcon />
          </div>
        </div>
      </div>

      {type === "youtube" && (
        <div className="rounded-lg overflow-hidden aspect-video">
          <iframe
            className="w-full h-full"
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {type === "twitter" && (
        <blockquote className="twitter-tweet mt-4">
          <a href={link}></a>
        </blockquote>
      )}
    </div>
  );
};
