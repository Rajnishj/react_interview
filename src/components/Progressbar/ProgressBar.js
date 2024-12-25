import React from "react";
import { faker } from '@faker-js/faker';
const ProgressBar = ({ progress }) => {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.progress, width: `${progress}%` }} />
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: "10px",
    overflow: "hidden",
    height: "20px",
  },
  progress: {
    height: "100%",
    backgroundColor: "#76c7c0",
    transition: "width 0.3s ease",
  },
};

export default ProgressBar;




// export function createRandomUser() {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// export const users = faker.helpers.multiple(createRandomUser, {
//   count: 100,
// });
