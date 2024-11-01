import css from "./LoadMoreBtn.module.css";

type Props = {
  onLoadMore: ()=> void
}

export default function LoadMoreBtn({ onLoadMore }: Props) {
  return (
    <button className={css.loadMoreButton} onClick={() => onLoadMore()} type="button">
      Load more
    </button>
  );
}