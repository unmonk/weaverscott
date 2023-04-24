import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <div className="card card-bordered shadow-sm hover:shadow-xl flex flex-col">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="card-body">
        <h3 className="card-title leading-snug">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Next</div>
          <div className="badge badge-outline">React</div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
