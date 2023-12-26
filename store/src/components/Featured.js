import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;

// // import Figure from "react-bootstrap/Figure";

// // function FigureExample() {
// //   return (
// //     <Figure>
// //       <Figure.Image
// //         width={171}
// //         height={180}
// //         alt="171x180"
// //         src="holder.js/171x180"
// //       />
// //       <Figure.Caption>
// //         Nulla vitae elit libero
// //       </Figure.Caption>
// //     </Figure>

// //   );
// // }

// // export default FigureExample;

// import { useEffect, useState } from "react";
// import {
//   ListObjectsCommand,
//   ListObjectsCommandOutput,
//   S3Client,
// } from "@aws-sdk/client-s3";

// function FigureExample() {
//   const [objects, setObjects] =
//     useState < Required < ListObjectsCommandOutput > ["Contents"] > [];

//   useEffect(() => {
//     // const client = new S3Client({
//     //   region: "us-east-1",
//       // Unless you have a public bucket, you'll need access to a private bucket.
//       // One way to do this is to create an Amazon Cognito identity pool, attach a role to the pool,
//       // and grant the role access to the 's3:GetObject' action.
//       //
//       // You'll also need to configure the CORS settings on the bucket to allow traffic from
//       // this example site. Here's an example configuration that allows all origins. Don't
//       // do this in production.
//       //[
//       //  {
//       //    "AllowedHeaders": ["*"],
//       //    "AllowedMethods": ["GET"],
//       //    "AllowedOrigins": ["*"],
//       //    "ExposeHeaders": [],
//       //  },
//       //]
//       //
//     //   credentials: fromCognitoIdentityPool({
//     //     clientConfig: { region: "us-east-1" },
//     //     identityPoolId: "<YOUR_IDENTITY_POOL_ID>",
//     //   }),
//     // });
//     const command = new ListObjectsCommand({ Bucket: "bucket-name" });
//     client.send(command).then(({ Contents }) => setObjects(Contents || []));
//   }, []);

//   return (
//     <div className="App">
//       {objects.map((o) => (
//         <div key={o.ETag}>{o.Key}</div>
//       ))}
//     </div>
//   );
// }

// export default FigureExample;
