import { NextApiRequest, NextApiResponse } from "next";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const ddbClient = new DynamoDBClient({ region: "ap-southeast-2" });
const marshallOptions = {
  convertEmptyValues: false,
  removeUndefinedValues: false,
  convertClassInstanceToMap: false,
};
const unmarshallOptions = {
  wrapNumbers: false,
};
const translateConfig = { marshallOptions, unmarshallOptions };
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, translateConfig);

const getVersion = async (appId: string) => {
  const params = {
    TableName: "bure_app_versions",
    Key: {
      appId,
    },
  };

  try {
    const { Item } = await ddbDocClient.send(new GetCommand(params));

    if (Item === undefined) throw new Error("Item was undefined");

    console.log("got version data", Item);

    const { ios, android } = Item;
    return { ios, android };
  } catch (e) {
    console.log("failed to get version data", e);
    throw e;
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    if (!id) throw new Error("id param missing.");
    if (Array.isArray(id))
      throw new Error("id param is an array, it should be a string.");

    if (req.method === "GET") {
      const data = await getVersion(id);

      res.json(data);
    } else if (req.method === "POST") {
      // add data to database (once authenticated)
      res.send("not supported yet");
    } else throw new Error("method not supported");
  } catch (e: any) {
    console.log("api/version/[id] error:", e);
    res.status(500).json({ error: "unable to find version for provided id" });
  }
};

export default handler;
