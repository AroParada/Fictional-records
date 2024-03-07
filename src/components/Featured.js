import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Live from '../assets/130907063709-23-punk-history-restricted.jpg'
import Merchandise from '../assets/dbbf3a60c162a140f29a630964f9b516.jpg'
import Books from '../assets/overflowing-bookcases.jpg'

function GridExample() {
  return (
    <Row xs={1} sm={4} className="justify-content-center">
      <Col className="mx-3 mb-4">
        <Card>
          <Card.Img variant="top" src={Live} />
          <Card.Body>
            <Card.Title>Live Events</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col
        className="mx-3 mb-4"
        // key={idx}
      >
        <Card>
          <Card.Img variant="top" src={Merchandise} />
          <Card.Body>
            <Card.Title>Merchandise</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col
        className="mx-3 mb-4"
        // key={idx}
      >
        <Card>
          <Card.Img variant="top" src={Books} />
          <Card.Body>
            <Card.Title>Used Books</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    // <div>

    // </div>
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
