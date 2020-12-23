#!/usr/bin/env node
import * as cdk from "@aws-cdk/core";
import { HellocdkStack } from "../lib/hellocdk-stack";

const app = new cdk.App();
new HellocdkStack(app, "HellocdkStack");
