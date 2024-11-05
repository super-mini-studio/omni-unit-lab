import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FileLoad } from "./fileLoadDialog";
import {
  mockFileHandle,
  mockIsLoading,
  mockSetFilePathsOut,
  pickerMock,
} from "../../__mocks__/mockSetOpenFilePicker";

describe("Integration Tests for the fileLoadDialog", () => {
  const user = userEvent;
  let paths;
  let loading;

  vi.stubGlobal("showOpenFilePicker", vi.fn());

  it("should see the open dialog button", () => {
    render(<FileLoad setFilePathsOut={paths} isLoading={loading} />);

    const openBtn = screen.findByRole("button");

    expect(openBtn).toBeTruthy();
  });

  it("should when button is clicked, a dialog opens", async () => {
    const winSpy = vi.spyOn(window, "showOpenFilePicker");
    render(<FileLoad setFilePathsOut={paths} isLoading={loading} />);

    const openBtn = await screen.findByRole("button");

    await user.click(openBtn);

    expect(winSpy).toHaveBeenCalled();
  });

  it("should set isLoading to true when a file is chosen", async () => {
    Object.defineProperty(window, "showOpenFilePicker", {
      value: pickerMock,
      writable: true,
    });

    render(
      <FileLoad
        setFilePathsOut={mockSetFilePathsOut}
        isLoading={mockIsLoading}
      />
    );

    pickerMock.mockResolvedValue([mockFileHandle]);

    const btn = await screen.findByRole("button");
    await user.click(btn);

    expect(mockSetFilePathsOut).toHaveBeenCalled();
    expect(mockIsLoading).toBeTruthy();
  });
});
