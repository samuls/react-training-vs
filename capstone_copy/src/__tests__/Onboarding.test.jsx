import {StaticRouter} from "react-router-dom/server";

import React from "react";

import { render, screen, within } from "@testing-library/react";

import Onboarding from "../Onboarding";
import { expect, test } from "vitest";


test('alt contains correct value', () => {
    render(<Onboarding />);
    const testImage = document.querySelector("img");
    expect(testImage.alt).toContain("onboarding");
    expect(testImage.src).toContain("CustomerOnboarding.png");    
  });

