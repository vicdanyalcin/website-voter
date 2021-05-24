import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import WebsiteList from "./WebsiteList";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders website list", async () => {
    const websiteMock = {
        id: 8999,
        vote: 32,
        linkUrl: "www.newwebsite.com",
        linkName: "New Website"
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(websiteMock)
        })
    );

    await act(async () => {
        render(<WebsiteList id={websiteMock.id}/>, container);
    });

    expect(container.querySelector("li").textContent).toBe(websiteMock.linkName);
    expect(container.querySelector("li").textContent).toBe(websiteMock.vote);
    expect(container.textContent).toContain(websiteMock.linkUrl);

    global.fetch.mockRestore();
});