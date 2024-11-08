// import styled from "styled-components";

// const proposals = [
//   {
//     id: 1,
//     title: "Customer Satisfaction Survey",
//     image:
//       "https://s3-alpha-sig.figma.com/img/73f9/4b5d/942949f634cd390976c0df2802be4b65?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i9x-L0XpVf3BaSTifWEKoslaHADZS1uLarKwdnR6ngpWy-AUF1WZAoeCwYIzTFidIlzD1wh8kjXtnwcRL7V6RgwDZY9RGhkymLHXEF7nRN2ozI4~QZklHuyi1IfxfLJB6b3Vsh9pyigv964u4XrCpDSsjDQf2KtpdbcgSCbJ02B4A~TIfpTSl2jrcp0MNFaGWZ~~rXEJkp~~5O9t61x4SOyAjBFanynnjcdD~7-WtlbvvXa22NIZ8FU9c8mlGJWRR5t1uCuWoDqhPQw45ZPsspKpE4S7dx80hmK~eANkKBAZEECZbhwd67Nk4EtBtSRMCrNfD-iJAqq3Lf8gJFH4Hg__",
//   },
//   {
//     id: 2,
//     title: "Training Evaluation Form",
//     image:
//       "https://s3-alpha-sig.figma.com/img/fa49/efe0/b9c6a9a5d08494299decc5228dfaa543?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=drX8xypNtOFrok~bIeyqMQ~usHdEbPRlQ475FXqBUnr5E~hKblymdQx4wuS1qjf5EYLL4pN3QJvIWiEzYPhZmJ7cuLOYiISQm4BjdTqZAoAR5ovk-JNYMg7Rmr~mtf1o4DWdWn-57SSqxGGfuad2daUSmCZJ0MumGbDIhQP-uoEh53HuAJE6C8PVNeZ3KmAxaey0CI0YYDmLjlzONu8NpGN4raTqzbnyTJ5wYfwSbmLla6oiuFUg-7la-9X3qxWIPB~-AEXRHDNepdDNt-mzSfbHfvp9bYQ7VR9g80s-JUjkdE9hTveK2Ek4DvwGKad7TF9XSzD429KSvhtqOjkHPQ__",
//   },
//   {
//     id: 3,
//     title: "Performance Reviews",
//     image:
//       "https://s3-alpha-sig.figma.com/img/c2c5/472b/7bf91fe5d27dc9fa284141730b107a33?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oi3efJj1lZ-4xs~gk-5rAtf55-iIcRM-6EwNYU3iUPpGrZThhSPfNio4kuTkZvYlnnnsmQEM9z~s2PIIkLi9Z0vLLrsrjA2Sjwk8Vn3EWWjk9CF9jpZQBV5tEWrEyRiPOPziFUdBR7EHvu-N1yhVi9XqXmik-UeR-E2s9NS4ZGCFyL8UgNKp~INA7T7K5heHUxCISRfIv8PjZST-Hvr-E9y~eHPJhV-gJqSTPyjHQ66rkNcMpBrR~c9iNRyFT1hhgLFgLYQpx2VmJQGBCrcPuUsITOQYi0GlLpHAACfJ~APVCaNvFykE~J-u-EY7aRtbCVomXU~lTdGEUu1knGJY7w__",
//   },
// ];

// const Container = styled.div`
//   padding: 1.5rem;
// `;

// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 0.1rem;
// `;

// const Title = styled.h2`
//   font-size: 0.825rem;
//   font-weight: 600;
//   color: #2d3748;
// `;

// const ViewAllButton = styled.button`
//   display: flex;
//   align-items: center;
//   font-size: 0.75rem;
//   color: #4a5568;
//   &:hover {
//     color: #2d3748;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   gap: 1rem;
//   grid-template-columns: 1fr;
//   @media (min-width: 640px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media (min-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;

// const ProposalCard = styled.div`
//   position: relative;
//   padding: 0.35rem;
//   width: 215px;
//   height: 316px;
// `;

// const ProposalImage = styled.img`
//   width: 90%;
//   height: 90%;
//   object-fit: cover;
//   border-radius: 0.5rem;
// `;

// const ProposalsSection = () => (
//   <Container>
//     <Header>
//       <Title>Your Proposals</Title>
//       <ViewAllButton>
//         View All <span style={{ marginLeft: "0.25rem" }}>→</span>
//       </ViewAllButton>
//     </Header>
//     <Grid>
//       {proposals.map((proposal) => (
//         <ProposalCard key={proposal.id}>
//           <ProposalImage src={proposal.image} alt={proposal.title} />
//         </ProposalCard>
//       ))}
//     </Grid>
//   </Container>
// );

// export default ProposalsSection;
import styled from "styled-components";

const proposals = [
  {
    id: 1,
    title: "Customer Satisfaction Survey",
    image:
      "https://s3-alpha-sig.figma.com/img/73f9/4b5d/942949f634cd390976c0df2802be4b65?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i9x-L0XpVf3BaSTifWEKoslaHADZS1uLarKwdnR6ngpWy-AUF1WZAoeCwYIzTFidIlzD1wh8kjXtnwcRL7V6RgwDZY9RGhkymLHXEF7nRN2ozI4~QZklHuyi1IfxfLJB6b3Vsh9pyigv964u4XrCpDSsjDQf2KtpdbcgSCbJ02B4A~TIfpTSl2jrcp0MNFaGWZ~~rXEJkp~~5O9t61x4SOyAjBFanynnjcdD~7-WtlbvvXa22NIZ8FU9c8mlGJWRR5t1uCuWoDqhPQw45ZPsspKpE4S7dx80hmK~eANkKBAZEECZbhwd67Nk4EtBtSRMCrNfD-iJAqq3Lf8gJFH4Hg__",
  },
  {
    id: 2,
    title: "Training Evaluation Form",
    image:
      "https://s3-alpha-sig.figma.com/img/fa49/efe0/b9c6a9a5d08494299decc5228dfaa543?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=drX8xypNtOFrok~bIeyqMQ~usHdEbPRlQ475FXqBUnr5E~hKblymdQx4wuS1qjf5EYLL4pN3QJvIWiEzYPhZmJ7cuLOYiISQm4BjdTqZAoAR5ovk-JNYMg7Rmr~mtf1o4DWdWn-57SSqxGGfuad2daUSmCZJ0MumGbDIhQP-uoEh53HuAJE6C8PVNeZ3KmAxaey0CI0YYDmLjlzONu8NpGN4raTqzbnyTJ5wYfwSbmLla6oiuFUg-7la-9X3qxWIPB~-AEXRHDNepdDNt-mzSfbHfvp9bYQ7VR9g80s-JUjkdE9hTveK2Ek4DvwGKad7TF9XSzD429KSvhtqOjkHPQ__",
  },
  {
    id: 3,
    title: "Performance Reviews",
    image:
      "https://s3-alpha-sig.figma.com/img/c2c5/472b/7bf91fe5d27dc9fa284141730b107a33?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oi3efJj1lZ-4xs~gk-5rAtf55-iIcRM-6EwNYU3iUPpGrZThhSPfNio4kuTkZvYlnnnsmQEM9z~s2PIIkLi9Z0vLLrsrjA2Sjwk8Vn3EWWjk9CF9jpZQBV5tEWrEyRiPOPziFUdBR7EHvu-N1yhVi9XqXmik-UeR-E2s9NS4ZGCFyL8UgNKp~INA7T7K5heHUxCISRfIv8PjZST-Hvr-E9y~eHPJhV-gJqSTPyjHQ66rkNcMpBrR~c9iNRyFT1hhgLFgLYQpx2VmJQGBCrcPuUsITOQYi0GlLpHAACfJ~APVCaNvFykE~J-u-EY7aRtbCVomXU~lTdGEUu1knGJY7w__",
  },
];

const Container = styled.div`
  padding: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.1rem;
`;

const Title = styled.h2`
  font-size: 0.825rem;
  font-weight: 600;
  color: #2d3748; /* Gray 800 */
`;

const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #4a5568; /* Gray 600 */
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: #2d3748; /* Gray 800 */
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProposalCard = styled.div`
  position: relative;
  padding: 0.35rem;
  width: 215px;
  height: 316px;
`;

const ProposalImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const ProposalsSection = () => (
  <p>Proposal</p>
  // <Container>
  //   <Header>
  //     <Title>Your Proposals</Title>
  //     <ViewAllButton>
  //       View All <span style={{ marginLeft: "0.25rem" }}>→</span>
  //     </ViewAllButton>
  //   </Header>
  //   <Grid>
  //     {proposals.map((proposal) => (
  //       <ProposalCard key={proposal.id}>
  //         <ProposalImage src={proposal.image} alt={proposal.title} />
  //       </ProposalCard>
  //     ))}
  //   </Grid>
  // </Container>
);

export default ProposalsSection;
