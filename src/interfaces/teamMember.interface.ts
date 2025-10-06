interface IPersonReview {
  brandLogo: string;
  brandName: string;
  firstComment: string;
  secondComment: string;
  thirdComment: string;
  fourthComment: string;
  designation: string;
  country: string;
}

export interface ITeamMember {
  _id: number;
  fullName: string;
  role: string;
  profilePhoto: string;
  personReviews: IPersonReview[];
}
