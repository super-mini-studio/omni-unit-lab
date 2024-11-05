import React from "react";
import { describe, it, expect, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CbtSheet } from "./cbt-sheet";
import {
  mockFileHandle,
  pickerMock,
} from "../../../__mocks__/mockSetOpenFilePicker";

/**
 * 1 when you get to the page, you should be able to click the load button and the native file load dialog should show.
 * 2 when you select a file from the dialog, it should display the contents on the page
 * 3 when a file fails to open, an recoverable error should show
 */

describe("integration: cbt sheet file loading", () => {
  const user = userEvent;

  it("should load the sheet page", async () => {
    render(<CbtSheet />);

    const fileBtn = await screen.findByRole("button");
    expect(fileBtn).toBeTruthy();
  });

  it("should click the load file button and return a file", async () => {
    Object.defineProperty(window, "showOpenFilePicker", {
      value: pickerMock,
      writable: true,
    });

    render(<CbtSheet />);

    pickerMock.mockResolvedValue([mockFileHandle]);

    const fileBtn = await screen.findByRole("button");

    await user.click(fileBtn);

    await act(async () => {
      const par = await screen.findByRole("paragraph");
      expect(par).toBeTruthy();
    });
  });
});
