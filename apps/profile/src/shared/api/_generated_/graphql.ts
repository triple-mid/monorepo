/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  CalendarDay: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Achievement = {
  __typename?: 'Achievement';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  profile?: Maybe<UserProfile>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AchievementCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<UserProfileRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AchievementManyRelationFilter = {
  every?: InputMaybe<AchievementWhereInput>;
  none?: InputMaybe<AchievementWhereInput>;
  some?: InputMaybe<AchievementWhereInput>;
};

export type AchievementOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type AchievementRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AchievementWhereUniqueInput>>;
  create?: InputMaybe<Array<AchievementCreateInput>>;
};

export type AchievementRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AchievementWhereUniqueInput>>;
  create?: InputMaybe<Array<AchievementCreateInput>>;
  disconnect?: InputMaybe<Array<AchievementWhereUniqueInput>>;
  set?: InputMaybe<Array<AchievementWhereUniqueInput>>;
};

export type AchievementUpdateArgs = {
  data: AchievementUpdateInput;
  where: AchievementWhereUniqueInput;
};

export type AchievementUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<UserProfileRelateToOneForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AchievementWhereInput = {
  AND?: InputMaybe<Array<AchievementWhereInput>>;
  NOT?: InputMaybe<Array<AchievementWhereInput>>;
  OR?: InputMaybe<Array<AchievementWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  profile?: InputMaybe<UserProfileWhereInput>;
  title?: InputMaybe<StringFilter>;
};

export type AchievementWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Cv = {
  __typename?: 'CV';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateFrom?: Maybe<Scalars['CalendarDay']['output']>;
  dateTo?: Maybe<Scalars['CalendarDay']['output']>;
  id: Scalars['ID']['output'];
  place?: Maybe<Scalars['String']['output']>;
  priceFrom?: Maybe<Scalars['String']['output']>;
  priceTo?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Skill>>;
  skillsCount?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type CvSkillsArgs = {
  cursor?: InputMaybe<SkillWhereUniqueInput>;
  orderBy?: Array<SkillOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SkillWhereInput;
};


export type CvSkillsCountArgs = {
  where?: SkillWhereInput;
};

export type CvCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateFrom?: InputMaybe<Scalars['CalendarDay']['input']>;
  dateTo?: InputMaybe<Scalars['CalendarDay']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  priceFrom?: InputMaybe<Scalars['String']['input']>;
  priceTo?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<SkillRelateToManyForCreateInput>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type CvManyRelationFilter = {
  every?: InputMaybe<CvWhereInput>;
  none?: InputMaybe<CvWhereInput>;
  some?: InputMaybe<CvWhereInput>;
};

export type CvOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  dateFrom?: InputMaybe<OrderDirection>;
  dateTo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  place?: InputMaybe<OrderDirection>;
  priceFrom?: InputMaybe<OrderDirection>;
  priceTo?: InputMaybe<OrderDirection>;
  summary?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type CvRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CvWhereUniqueInput>>;
  create?: InputMaybe<Array<CvCreateInput>>;
};

export type CvRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CvWhereUniqueInput>>;
  create?: InputMaybe<Array<CvCreateInput>>;
  disconnect?: InputMaybe<Array<CvWhereUniqueInput>>;
  set?: InputMaybe<Array<CvWhereUniqueInput>>;
};

export type CvUpdateArgs = {
  data: CvUpdateInput;
  where: CvWhereUniqueInput;
};

export type CvUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateFrom?: InputMaybe<Scalars['CalendarDay']['input']>;
  dateTo?: InputMaybe<Scalars['CalendarDay']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  priceFrom?: InputMaybe<Scalars['String']['input']>;
  priceTo?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<SkillRelateToManyForUpdateInput>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CvWhereInput = {
  AND?: InputMaybe<Array<CvWhereInput>>;
  NOT?: InputMaybe<Array<CvWhereInput>>;
  OR?: InputMaybe<Array<CvWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  dateFrom?: InputMaybe<CalendarDayNullableFilter>;
  dateTo?: InputMaybe<CalendarDayNullableFilter>;
  id?: InputMaybe<IdFilter>;
  place?: InputMaybe<StringFilter>;
  priceFrom?: InputMaybe<StringFilter>;
  priceTo?: InputMaybe<StringFilter>;
  skills?: InputMaybe<SkillManyRelationFilter>;
  summary?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type CvWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CalendarDayNullableFilter = {
  equals?: InputMaybe<Scalars['CalendarDay']['input']>;
  gt?: InputMaybe<Scalars['CalendarDay']['input']>;
  gte?: InputMaybe<Scalars['CalendarDay']['input']>;
  in?: InputMaybe<Array<Scalars['CalendarDay']['input']>>;
  lt?: InputMaybe<Scalars['CalendarDay']['input']>;
  lte?: InputMaybe<Scalars['CalendarDay']['input']>;
  not?: InputMaybe<CalendarDayNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['CalendarDay']['input']>>;
};

export type CreateInitialUserInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Document = {
  __typename?: 'Document';
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  owner?: Maybe<User>;
  title?: Maybe<Scalars['String']['output']>;
};

export type DocumentCreateInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentManyRelationFilter = {
  every?: InputMaybe<DocumentWhereInput>;
  none?: InputMaybe<DocumentWhereInput>;
  some?: InputMaybe<DocumentWhereInput>;
};

export type DocumentOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type DocumentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<DocumentWhereUniqueInput>>;
  create?: InputMaybe<Array<DocumentCreateInput>>;
};

export type DocumentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<DocumentWhereUniqueInput>>;
  create?: InputMaybe<Array<DocumentCreateInput>>;
  disconnect?: InputMaybe<Array<DocumentWhereUniqueInput>>;
  set?: InputMaybe<Array<DocumentWhereUniqueInput>>;
};

export type DocumentUpdateArgs = {
  data: DocumentUpdateInput;
  where: DocumentWhereUniqueInput;
};

export type DocumentUpdateInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentWhereInput = {
  AND?: InputMaybe<Array<DocumentWhereInput>>;
  NOT?: InputMaybe<Array<DocumentWhereInput>>;
  OR?: InputMaybe<Array<DocumentWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  owner?: InputMaybe<UserWhereInput>;
  title?: InputMaybe<StringFilter>;
};

export type DocumentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JobVacancy = {
  __typename?: 'JobVacancy';
  content?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<ImageFieldOutput>;
  coverUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateFrom?: Maybe<Scalars['CalendarDay']['output']>;
  dateTo?: Maybe<Scalars['CalendarDay']['output']>;
  id: Scalars['ID']['output'];
  organisation?: Maybe<Organization>;
  place?: Maybe<Scalars['String']['output']>;
  priceFrom?: Maybe<Scalars['String']['output']>;
  priceTo?: Maybe<Scalars['String']['output']>;
  requireSelfEmployment?: Maybe<Scalars['Boolean']['output']>;
  skills?: Maybe<Array<Skill>>;
  skillsCount?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type JobVacancySkillsArgs = {
  cursor?: InputMaybe<SkillWhereUniqueInput>;
  orderBy?: Array<SkillOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SkillWhereInput;
};


export type JobVacancySkillsCountArgs = {
  where?: SkillWhereInput;
};

export type JobVacancyCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<ImageFieldInput>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateFrom?: InputMaybe<Scalars['CalendarDay']['input']>;
  dateTo?: InputMaybe<Scalars['CalendarDay']['input']>;
  organisation?: InputMaybe<OrganizationRelateToOneForCreateInput>;
  place?: InputMaybe<Scalars['String']['input']>;
  priceFrom?: InputMaybe<Scalars['String']['input']>;
  priceTo?: InputMaybe<Scalars['String']['input']>;
  requireSelfEmployment?: InputMaybe<Scalars['Boolean']['input']>;
  skills?: InputMaybe<SkillRelateToManyForCreateInput>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type JobVacancyManyRelationFilter = {
  every?: InputMaybe<JobVacancyWhereInput>;
  none?: InputMaybe<JobVacancyWhereInput>;
  some?: InputMaybe<JobVacancyWhereInput>;
};

export type JobVacancyOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  coverUrl?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  dateFrom?: InputMaybe<OrderDirection>;
  dateTo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  place?: InputMaybe<OrderDirection>;
  priceFrom?: InputMaybe<OrderDirection>;
  priceTo?: InputMaybe<OrderDirection>;
  requireSelfEmployment?: InputMaybe<OrderDirection>;
  summary?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type JobVacancyRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<JobVacancyWhereUniqueInput>>;
  create?: InputMaybe<Array<JobVacancyCreateInput>>;
};

export type JobVacancyRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<JobVacancyWhereUniqueInput>>;
  create?: InputMaybe<Array<JobVacancyCreateInput>>;
  disconnect?: InputMaybe<Array<JobVacancyWhereUniqueInput>>;
  set?: InputMaybe<Array<JobVacancyWhereUniqueInput>>;
};

export type JobVacancyUpdateArgs = {
  data: JobVacancyUpdateInput;
  where: JobVacancyWhereUniqueInput;
};

export type JobVacancyUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<ImageFieldInput>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateFrom?: InputMaybe<Scalars['CalendarDay']['input']>;
  dateTo?: InputMaybe<Scalars['CalendarDay']['input']>;
  organisation?: InputMaybe<OrganizationRelateToOneForUpdateInput>;
  place?: InputMaybe<Scalars['String']['input']>;
  priceFrom?: InputMaybe<Scalars['String']['input']>;
  priceTo?: InputMaybe<Scalars['String']['input']>;
  requireSelfEmployment?: InputMaybe<Scalars['Boolean']['input']>;
  skills?: InputMaybe<SkillRelateToManyForUpdateInput>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type JobVacancyWhereInput = {
  AND?: InputMaybe<Array<JobVacancyWhereInput>>;
  NOT?: InputMaybe<Array<JobVacancyWhereInput>>;
  OR?: InputMaybe<Array<JobVacancyWhereInput>>;
  content?: InputMaybe<StringFilter>;
  coverUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  dateFrom?: InputMaybe<CalendarDayNullableFilter>;
  dateTo?: InputMaybe<CalendarDayNullableFilter>;
  id?: InputMaybe<IdFilter>;
  organisation?: InputMaybe<OrganizationWhereInput>;
  place?: InputMaybe<StringFilter>;
  priceFrom?: InputMaybe<StringFilter>;
  priceTo?: InputMaybe<StringFilter>;
  requireSelfEmployment?: InputMaybe<BooleanFilter>;
  skills?: InputMaybe<SkillManyRelationFilter>;
  summary?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type JobVacancyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAchievement?: Maybe<Achievement>;
  createAchievements?: Maybe<Array<Maybe<Achievement>>>;
  createCV?: Maybe<Cv>;
  createCVS?: Maybe<Array<Maybe<Cv>>>;
  createDocument?: Maybe<Document>;
  createDocuments?: Maybe<Array<Maybe<Document>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createJobVacancies?: Maybe<Array<Maybe<JobVacancy>>>;
  createJobVacancy?: Maybe<JobVacancy>;
  createOrganization?: Maybe<Organization>;
  createOrganizations?: Maybe<Array<Maybe<Organization>>>;
  createPost?: Maybe<Post>;
  createPosts?: Maybe<Array<Maybe<Post>>>;
  createSkill?: Maybe<Skill>;
  createSkills?: Maybe<Array<Maybe<Skill>>>;
  createStories?: Maybe<Array<Maybe<Story>>>;
  createStory?: Maybe<Story>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createUser?: Maybe<User>;
  createUserProfile?: Maybe<UserProfile>;
  createUserProfiles?: Maybe<Array<Maybe<UserProfile>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAchievement?: Maybe<Achievement>;
  deleteAchievements?: Maybe<Array<Maybe<Achievement>>>;
  deleteCV?: Maybe<Cv>;
  deleteCVS?: Maybe<Array<Maybe<Cv>>>;
  deleteDocument?: Maybe<Document>;
  deleteDocuments?: Maybe<Array<Maybe<Document>>>;
  deleteJobVacancies?: Maybe<Array<Maybe<JobVacancy>>>;
  deleteJobVacancy?: Maybe<JobVacancy>;
  deleteOrganization?: Maybe<Organization>;
  deleteOrganizations?: Maybe<Array<Maybe<Organization>>>;
  deletePost?: Maybe<Post>;
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  deleteSkill?: Maybe<Skill>;
  deleteSkills?: Maybe<Array<Maybe<Skill>>>;
  deleteStories?: Maybe<Array<Maybe<Story>>>;
  deleteStory?: Maybe<Story>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteUser?: Maybe<User>;
  deleteUserProfile?: Maybe<UserProfile>;
  deleteUserProfiles?: Maybe<Array<Maybe<UserProfile>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  updateAchievement?: Maybe<Achievement>;
  updateAchievements?: Maybe<Array<Maybe<Achievement>>>;
  updateCV?: Maybe<Cv>;
  updateCVS?: Maybe<Array<Maybe<Cv>>>;
  updateDocument?: Maybe<Document>;
  updateDocuments?: Maybe<Array<Maybe<Document>>>;
  updateJobVacancies?: Maybe<Array<Maybe<JobVacancy>>>;
  updateJobVacancy?: Maybe<JobVacancy>;
  updateOrganization?: Maybe<Organization>;
  updateOrganizations?: Maybe<Array<Maybe<Organization>>>;
  updatePost?: Maybe<Post>;
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  updateSkill?: Maybe<Skill>;
  updateSkills?: Maybe<Array<Maybe<Skill>>>;
  updateStories?: Maybe<Array<Maybe<Story>>>;
  updateStory?: Maybe<Story>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateUser?: Maybe<User>;
  updateUserProfile?: Maybe<UserProfile>;
  updateUserProfiles?: Maybe<Array<Maybe<UserProfile>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationCreateAchievementArgs = {
  data: AchievementCreateInput;
};


export type MutationCreateAchievementsArgs = {
  data: Array<AchievementCreateInput>;
};


export type MutationCreateCvArgs = {
  data: CvCreateInput;
};


export type MutationCreateCvsArgs = {
  data: Array<CvCreateInput>;
};


export type MutationCreateDocumentArgs = {
  data: DocumentCreateInput;
};


export type MutationCreateDocumentsArgs = {
  data: Array<DocumentCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateJobVacanciesArgs = {
  data: Array<JobVacancyCreateInput>;
};


export type MutationCreateJobVacancyArgs = {
  data: JobVacancyCreateInput;
};


export type MutationCreateOrganizationArgs = {
  data: OrganizationCreateInput;
};


export type MutationCreateOrganizationsArgs = {
  data: Array<OrganizationCreateInput>;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreatePostsArgs = {
  data: Array<PostCreateInput>;
};


export type MutationCreateSkillArgs = {
  data: SkillCreateInput;
};


export type MutationCreateSkillsArgs = {
  data: Array<SkillCreateInput>;
};


export type MutationCreateStoriesArgs = {
  data: Array<StoryCreateInput>;
};


export type MutationCreateStoryArgs = {
  data: StoryCreateInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserProfileArgs = {
  data: UserProfileCreateInput;
};


export type MutationCreateUserProfilesArgs = {
  data: Array<UserProfileCreateInput>;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteAchievementArgs = {
  where: AchievementWhereUniqueInput;
};


export type MutationDeleteAchievementsArgs = {
  where: Array<AchievementWhereUniqueInput>;
};


export type MutationDeleteCvArgs = {
  where: CvWhereUniqueInput;
};


export type MutationDeleteCvsArgs = {
  where: Array<CvWhereUniqueInput>;
};


export type MutationDeleteDocumentArgs = {
  where: DocumentWhereUniqueInput;
};


export type MutationDeleteDocumentsArgs = {
  where: Array<DocumentWhereUniqueInput>;
};


export type MutationDeleteJobVacanciesArgs = {
  where: Array<JobVacancyWhereUniqueInput>;
};


export type MutationDeleteJobVacancyArgs = {
  where: JobVacancyWhereUniqueInput;
};


export type MutationDeleteOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type MutationDeleteOrganizationsArgs = {
  where: Array<OrganizationWhereUniqueInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeletePostsArgs = {
  where: Array<PostWhereUniqueInput>;
};


export type MutationDeleteSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationDeleteSkillsArgs = {
  where: Array<SkillWhereUniqueInput>;
};


export type MutationDeleteStoriesArgs = {
  where: Array<StoryWhereUniqueInput>;
};


export type MutationDeleteStoryArgs = {
  where: StoryWhereUniqueInput;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserProfileArgs = {
  where: UserProfileWhereUniqueInput;
};


export type MutationDeleteUserProfilesArgs = {
  where: Array<UserProfileWhereUniqueInput>;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateAchievementArgs = {
  data: AchievementUpdateInput;
  where: AchievementWhereUniqueInput;
};


export type MutationUpdateAchievementsArgs = {
  data: Array<AchievementUpdateArgs>;
};


export type MutationUpdateCvArgs = {
  data: CvUpdateInput;
  where: CvWhereUniqueInput;
};


export type MutationUpdateCvsArgs = {
  data: Array<CvUpdateArgs>;
};


export type MutationUpdateDocumentArgs = {
  data: DocumentUpdateInput;
  where: DocumentWhereUniqueInput;
};


export type MutationUpdateDocumentsArgs = {
  data: Array<DocumentUpdateArgs>;
};


export type MutationUpdateJobVacanciesArgs = {
  data: Array<JobVacancyUpdateArgs>;
};


export type MutationUpdateJobVacancyArgs = {
  data: JobVacancyUpdateInput;
  where: JobVacancyWhereUniqueInput;
};


export type MutationUpdateOrganizationArgs = {
  data: OrganizationUpdateInput;
  where: OrganizationWhereUniqueInput;
};


export type MutationUpdateOrganizationsArgs = {
  data: Array<OrganizationUpdateArgs>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostsArgs = {
  data: Array<PostUpdateArgs>;
};


export type MutationUpdateSkillArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};


export type MutationUpdateSkillsArgs = {
  data: Array<SkillUpdateArgs>;
};


export type MutationUpdateStoriesArgs = {
  data: Array<StoryUpdateArgs>;
};


export type MutationUpdateStoryArgs = {
  data: StoryUpdateInput;
  where: StoryWhereUniqueInput;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserProfileArgs = {
  data: UserProfileUpdateInput;
  where: UserProfileWhereUniqueInput;
};


export type MutationUpdateUserProfilesArgs = {
  data: Array<UserProfileUpdateArgs>;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Organization = {
  __typename?: 'Organization';
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inn?: Maybe<Scalars['String']['output']>;
  jobVacancies?: Maybe<Array<JobVacancy>>;
  jobVacanciesCount?: Maybe<Scalars['Int']['output']>;
  ogrn?: Maybe<Scalars['String']['output']>;
  reviewsCount?: Maybe<Scalars['Int']['output']>;
  starsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type OrganizationJobVacanciesArgs = {
  cursor?: InputMaybe<JobVacancyWhereUniqueInput>;
  orderBy?: Array<JobVacancyOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: JobVacancyWhereInput;
};


export type OrganizationJobVacanciesCountArgs = {
  where?: JobVacancyWhereInput;
};

export type OrganizationCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  jobVacancies?: InputMaybe<JobVacancyRelateToManyForCreateInput>;
  ogrn?: InputMaybe<Scalars['String']['input']>;
  reviewsCount?: InputMaybe<Scalars['Int']['input']>;
  starsCount?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  inn?: InputMaybe<OrderDirection>;
  ogrn?: InputMaybe<OrderDirection>;
  reviewsCount?: InputMaybe<OrderDirection>;
  starsCount?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type OrganizationRelateToOneForCreateInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  create?: InputMaybe<OrganizationCreateInput>;
};

export type OrganizationRelateToOneForUpdateInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  create?: InputMaybe<OrganizationCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrganizationUpdateArgs = {
  data: OrganizationUpdateInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  jobVacancies?: InputMaybe<JobVacancyRelateToManyForUpdateInput>;
  ogrn?: InputMaybe<Scalars['String']['input']>;
  reviewsCount?: InputMaybe<Scalars['Int']['input']>;
  starsCount?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationWhereInput = {
  AND?: InputMaybe<Array<OrganizationWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationWhereInput>>;
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  inn?: InputMaybe<StringFilter>;
  jobVacancies?: InputMaybe<JobVacancyManyRelationFilter>;
  ogrn?: InputMaybe<StringFilter>;
  reviewsCount?: InputMaybe<IntNullableFilter>;
  starsCount?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type OrganizationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type PostTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type PostTagsCountArgs = {
  where?: TagWhereInput;
};

export type PostCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostManyRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type PostRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
};

export type PostRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type PostUpdateArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Query = {
  __typename?: 'Query';
  achievement?: Maybe<Achievement>;
  achievements?: Maybe<Array<Achievement>>;
  achievementsCount?: Maybe<Scalars['Int']['output']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  cV?: Maybe<Cv>;
  cVS?: Maybe<Array<Cv>>;
  cVSCount?: Maybe<Scalars['Int']['output']>;
  document?: Maybe<Document>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  jobVacancies?: Maybe<Array<JobVacancy>>;
  jobVacanciesCount?: Maybe<Scalars['Int']['output']>;
  jobVacancy?: Maybe<JobVacancy>;
  keystone: KeystoneMeta;
  organization?: Maybe<Organization>;
  organizations?: Maybe<Array<Organization>>;
  organizationsCount?: Maybe<Scalars['Int']['output']>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  skill?: Maybe<Skill>;
  skills?: Maybe<Array<Skill>>;
  skillsCount?: Maybe<Scalars['Int']['output']>;
  stories?: Maybe<Array<Story>>;
  storiesCount?: Maybe<Scalars['Int']['output']>;
  story?: Maybe<Story>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userProfile?: Maybe<UserProfile>;
  userProfiles?: Maybe<Array<UserProfile>>;
  userProfilesCount?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryAchievementArgs = {
  where: AchievementWhereUniqueInput;
};


export type QueryAchievementsArgs = {
  cursor?: InputMaybe<AchievementWhereUniqueInput>;
  orderBy?: Array<AchievementOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AchievementWhereInput;
};


export type QueryAchievementsCountArgs = {
  where?: AchievementWhereInput;
};


export type QueryCvArgs = {
  where: CvWhereUniqueInput;
};


export type QueryCVsArgs = {
  cursor?: InputMaybe<CvWhereUniqueInput>;
  orderBy?: Array<CvOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CvWhereInput;
};


export type QueryCVsCountArgs = {
  where?: CvWhereInput;
};


export type QueryDocumentArgs = {
  where: DocumentWhereUniqueInput;
};


export type QueryDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: DocumentWhereInput;
};


export type QueryDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type QueryJobVacanciesArgs = {
  cursor?: InputMaybe<JobVacancyWhereUniqueInput>;
  orderBy?: Array<JobVacancyOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: JobVacancyWhereInput;
};


export type QueryJobVacanciesCountArgs = {
  where?: JobVacancyWhereInput;
};


export type QueryJobVacancyArgs = {
  where: JobVacancyWhereUniqueInput;
};


export type QueryOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type QueryOrganizationsArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  orderBy?: Array<OrganizationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrganizationWhereInput;
};


export type QueryOrganizationsCountArgs = {
  where?: OrganizationWhereInput;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type QueryPostsCountArgs = {
  where?: PostWhereInput;
};


export type QuerySkillArgs = {
  where: SkillWhereUniqueInput;
};


export type QuerySkillsArgs = {
  cursor?: InputMaybe<SkillWhereUniqueInput>;
  orderBy?: Array<SkillOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SkillWhereInput;
};


export type QuerySkillsCountArgs = {
  where?: SkillWhereInput;
};


export type QueryStoriesArgs = {
  cursor?: InputMaybe<StoryWhereUniqueInput>;
  orderBy?: Array<StoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: StoryWhereInput;
};


export type QueryStoriesCountArgs = {
  where?: StoryWhereInput;
};


export type QueryStoryArgs = {
  where: StoryWhereUniqueInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserProfileArgs = {
  where: UserProfileWhereUniqueInput;
};


export type QueryUserProfilesArgs = {
  cursor?: InputMaybe<UserProfileWhereUniqueInput>;
  orderBy?: Array<UserProfileOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserProfileWhereInput;
};


export type QueryUserProfilesCountArgs = {
  where?: UserProfileWhereInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Skill = {
  __typename?: 'Skill';
  cvs?: Maybe<Array<Cv>>;
  cvsCount?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  jobVacancies?: Maybe<Array<JobVacancy>>;
  jobVacanciesCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type SkillCvsArgs = {
  cursor?: InputMaybe<CvWhereUniqueInput>;
  orderBy?: Array<CvOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CvWhereInput;
};


export type SkillCvsCountArgs = {
  where?: CvWhereInput;
};


export type SkillJobVacanciesArgs = {
  cursor?: InputMaybe<JobVacancyWhereUniqueInput>;
  orderBy?: Array<JobVacancyOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: JobVacancyWhereInput;
};


export type SkillJobVacanciesCountArgs = {
  where?: JobVacancyWhereInput;
};

export type SkillCreateInput = {
  cvs?: InputMaybe<CvRelateToManyForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  jobVacancies?: InputMaybe<JobVacancyRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SkillManyRelationFilter = {
  every?: InputMaybe<SkillWhereInput>;
  none?: InputMaybe<SkillWhereInput>;
  some?: InputMaybe<SkillWhereInput>;
};

export type SkillOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type SkillRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SkillWhereUniqueInput>>;
  create?: InputMaybe<Array<SkillCreateInput>>;
};

export type SkillRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SkillWhereUniqueInput>>;
  create?: InputMaybe<Array<SkillCreateInput>>;
  disconnect?: InputMaybe<Array<SkillWhereUniqueInput>>;
  set?: InputMaybe<Array<SkillWhereUniqueInput>>;
};

export type SkillUpdateArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};

export type SkillUpdateInput = {
  cvs?: InputMaybe<CvRelateToManyForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  jobVacancies?: InputMaybe<JobVacancyRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SkillWhereInput = {
  AND?: InputMaybe<Array<SkillWhereInput>>;
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  OR?: InputMaybe<Array<SkillWhereInput>>;
  cvs?: InputMaybe<CvManyRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  jobVacancies?: InputMaybe<JobVacancyManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SkillWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Story = {
  __typename?: 'Story';
  author?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mediaUrl?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<ImageFieldOutput>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StoryCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
  thumb?: InputMaybe<ImageFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StoryManyRelationFilter = {
  every?: InputMaybe<StoryWhereInput>;
  none?: InputMaybe<StoryWhereInput>;
  some?: InputMaybe<StoryWhereInput>;
};

export type StoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  mediaUrl?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type StoryRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<StoryWhereUniqueInput>>;
  create?: InputMaybe<Array<StoryCreateInput>>;
};

export type StoryRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<StoryWhereUniqueInput>>;
  create?: InputMaybe<Array<StoryCreateInput>>;
  disconnect?: InputMaybe<Array<StoryWhereUniqueInput>>;
  set?: InputMaybe<Array<StoryWhereUniqueInput>>;
};

export type StoryUpdateArgs = {
  data: StoryUpdateInput;
  where: StoryWhereUniqueInput;
};

export type StoryUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
  thumb?: InputMaybe<ImageFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StoryWhereInput = {
  AND?: InputMaybe<Array<StoryWhereInput>>;
  NOT?: InputMaybe<Array<StoryWhereInput>>;
  OR?: InputMaybe<Array<StoryWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  mediaUrl?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type StoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type TagPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type TagPostsCountArgs = {
  where?: PostWhereInput;
};

export type TagCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cvs?: Maybe<Array<Cv>>;
  cvsCount?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Document>>;
  documentsCount?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  password?: Maybe<PasswordState>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  profile?: Maybe<UserProfile>;
  role?: Maybe<Scalars['String']['output']>;
  stories?: Maybe<Array<Story>>;
  storiesCount?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};


export type UserCvsArgs = {
  cursor?: InputMaybe<CvWhereUniqueInput>;
  orderBy?: Array<CvOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CvWhereInput;
};


export type UserCvsCountArgs = {
  where?: CvWhereInput;
};


export type UserDocumentsArgs = {
  cursor?: InputMaybe<DocumentWhereUniqueInput>;
  orderBy?: Array<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: DocumentWhereInput;
};


export type UserDocumentsCountArgs = {
  where?: DocumentWhereInput;
};


export type UserPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type UserPostsCountArgs = {
  where?: PostWhereInput;
};


export type UserStoriesArgs = {
  cursor?: InputMaybe<StoryWhereUniqueInput>;
  orderBy?: Array<StoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: StoryWhereInput;
};


export type UserStoriesCountArgs = {
  where?: StoryWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cvs?: InputMaybe<CvRelateToManyForCreateInput>;
  documents?: InputMaybe<DocumentRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  profile?: InputMaybe<UserProfileRelateToOneForCreateInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  stories?: InputMaybe<StoryRelateToManyForCreateInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  phoneNumber?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  username?: InputMaybe<OrderDirection>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  achievements?: Maybe<Array<Achievement>>;
  achievementsCount?: Maybe<Scalars['Int']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  birth?: Maybe<Scalars['CalendarDay']['output']>;
  competitionLevel?: Maybe<Scalars['Int']['output']>;
  competitionPoints?: Maybe<Scalars['Int']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<ImageFieldOutput>;
  reviewsCount?: Maybe<Scalars['Int']['output']>;
  starsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};


export type UserProfileAchievementsArgs = {
  cursor?: InputMaybe<AchievementWhereUniqueInput>;
  orderBy?: Array<AchievementOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AchievementWhereInput;
};


export type UserProfileAchievementsCountArgs = {
  where?: AchievementWhereInput;
};

export type UserProfileCreateInput = {
  achievements?: InputMaybe<AchievementRelateToManyForCreateInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  birth?: InputMaybe<Scalars['CalendarDay']['input']>;
  competitionLevel?: InputMaybe<Scalars['Int']['input']>;
  competitionPoints?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageFieldInput>;
  reviewsCount?: InputMaybe<Scalars['Int']['input']>;
  starsCount?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserProfileOrderByInput = {
  bio?: InputMaybe<OrderDirection>;
  birth?: InputMaybe<OrderDirection>;
  competitionLevel?: InputMaybe<OrderDirection>;
  competitionPoints?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  middleName?: InputMaybe<OrderDirection>;
  reviewsCount?: InputMaybe<OrderDirection>;
  starsCount?: InputMaybe<OrderDirection>;
};

export type UserProfileRelateToOneForCreateInput = {
  connect?: InputMaybe<UserProfileWhereUniqueInput>;
  create?: InputMaybe<UserProfileCreateInput>;
};

export type UserProfileRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserProfileWhereUniqueInput>;
  create?: InputMaybe<UserProfileCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserProfileUpdateArgs = {
  data: UserProfileUpdateInput;
  where: UserProfileWhereUniqueInput;
};

export type UserProfileUpdateInput = {
  achievements?: InputMaybe<AchievementRelateToManyForUpdateInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  birth?: InputMaybe<Scalars['CalendarDay']['input']>;
  competitionLevel?: InputMaybe<Scalars['Int']['input']>;
  competitionPoints?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ImageFieldInput>;
  reviewsCount?: InputMaybe<Scalars['Int']['input']>;
  starsCount?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserProfileWhereInput = {
  AND?: InputMaybe<Array<UserProfileWhereInput>>;
  NOT?: InputMaybe<Array<UserProfileWhereInput>>;
  OR?: InputMaybe<Array<UserProfileWhereInput>>;
  achievements?: InputMaybe<AchievementManyRelationFilter>;
  bio?: InputMaybe<StringFilter>;
  birth?: InputMaybe<CalendarDayNullableFilter>;
  competitionLevel?: InputMaybe<IntNullableFilter>;
  competitionPoints?: InputMaybe<IntNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  middleName?: InputMaybe<StringFilter>;
  reviewsCount?: InputMaybe<IntNullableFilter>;
  starsCount?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type UserProfileWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cvs?: InputMaybe<CvRelateToManyForUpdateInput>;
  documents?: InputMaybe<DocumentRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  profile?: InputMaybe<UserProfileRelateToOneForUpdateInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  stories?: InputMaybe<StoryRelateToManyForUpdateInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  cvs?: InputMaybe<CvManyRelationFilter>;
  documents?: InputMaybe<DocumentManyRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  profile?: InputMaybe<UserProfileWhereInput>;
  role?: InputMaybe<StringFilter>;
  stories?: InputMaybe<StoryManyRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type GetJobVacanciesFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobVacanciesFeedQuery = { __typename?: 'Query', jobVacancies?: Array<{ __typename?: 'JobVacancy', id: string, dateTo?: any | null, dateFrom?: any | null, createdAt?: any | null, coverUrl?: string | null, place?: string | null, priceFrom?: string | null, priceTo?: string | null, title?: string | null, summary?: string | null, content?: string | null, organisation?: { __typename?: 'Organization', address?: string | null, description?: string | null, title?: string | null, starsCount?: number | null, reviewsCount?: number | null, createdAt?: any | null } | null, skills?: Array<{ __typename?: 'Skill', id: string, title?: string | null, description?: string | null }> | null }> | null };

export type GetSelfQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetSelfQuery = { __typename?: 'Query', user?: { __typename?: 'User', email?: string | null, username?: string | null, phoneNumber?: string | null, profile?: { __typename?: 'UserProfile', id: string, firstName?: string | null, lastName?: string | null, middleName?: string | null, starsCount?: number | null, reviewsCount?: number | null, birth?: any | null, competitionLevel?: number | null, competitionPoints?: number | null, bio?: string | null, achievements?: Array<{ __typename?: 'Achievement', title?: string | null, description?: string | null }> | null } | null } | null };

export type GetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillsQuery = { __typename?: 'Query', skills?: Array<{ __typename?: 'Skill', id: string, title?: string | null, description?: string | null }> | null };


export const GetJobVacanciesFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJobVacanciesFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobVacancies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateTo"}},{"kind":"Field","name":{"kind":"Name","value":"dateFrom"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"place"}},{"kind":"Field","name":{"kind":"Name","value":"priceFrom"}},{"kind":"Field","name":{"kind":"Name","value":"priceTo"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"starsCount"}},{"kind":"Field","name":{"kind":"Name","value":"reviewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetJobVacanciesFeedQuery, GetJobVacanciesFeedQueryVariables>;
export const GetSelfDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSelf"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"starsCount"}},{"kind":"Field","name":{"kind":"Name","value":"reviewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"birth"}},{"kind":"Field","name":{"kind":"Name","value":"competitionLevel"}},{"kind":"Field","name":{"kind":"Name","value":"competitionPoints"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"achievements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]} as unknown as DocumentNode<GetSelfQuery, GetSelfQueryVariables>;
export const GetSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetSkillsQuery, GetSkillsQueryVariables>;