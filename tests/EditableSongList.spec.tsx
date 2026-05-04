import { fireEvent, render, screen } from "@testing-library/react";
import { EditableSongList } from "../src/components/EditableSongList";

describe("EditableSongList", () => {
    test("adds a new song", () => {
        const setSongs = jest.fn();

        render(<EditableSongList songs={["Song A"]} setSongs={setSongs} />);

        fireEvent.click(screen.getByText(/add song/i));

        expect(setSongs).toHaveBeenCalledWith(["Song A", ""]);
    });

    test("deletes a song", () => {
        const setSongs = jest.fn();

        render(
            <EditableSongList
                songs={["Song A", "Song B"]}
                setSongs={setSongs}
            />,
        );

        fireEvent.click(screen.getAllByText("❌")[0]);

        expect(setSongs).toHaveBeenCalledWith(["Song B"]);
    });
});
