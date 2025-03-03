import Friend from "./Friend";

export default function ListFriend({ data, selectedId, onSelectedId }) {
	return (
		<ul>
			{data.map((ele) => (
				<Friend
					key={ele.id}
					persone={ele}
					onSelectedFriend={onSelectedId}
					selectedId={selectedId}
				/>
			))}
		</ul>
	);
}
