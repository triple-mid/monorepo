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
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type Cv = {
  __typename?: 'CV';
  content?: Maybe<Cv_Content_Document>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
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
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
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
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  skills?: InputMaybe<SkillRelateToManyForUpdateInput>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CvWhereInput = {
  AND?: InputMaybe<Array<CvWhereInput>>;
  NOT?: InputMaybe<Array<CvWhereInput>>;
  OR?: InputMaybe<Array<CvWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  skills?: InputMaybe<SkillManyRelationFilter>;
  summary?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type CvWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Cv_Content_Document = {
  __typename?: 'CV_content_Document';
  document: Scalars['JSON']['output'];
};


export type Cv_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
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
  createCV?: Maybe<Cv>;
  createCVS?: Maybe<Array<Maybe<Cv>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
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
  deleteCV?: Maybe<Cv>;
  deleteCVS?: Maybe<Array<Maybe<Cv>>>;
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
  updateCV?: Maybe<Cv>;
  updateCVS?: Maybe<Array<Maybe<Cv>>>;
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


export type MutationCreateCvArgs = {
  data: CvCreateInput;
};


export type MutationCreateCvsArgs = {
  data: Array<CvCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
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


export type MutationDeleteCvArgs = {
  where: CvWhereUniqueInput;
};


export type MutationDeleteCvsArgs = {
  where: Array<CvWhereUniqueInput>;
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


export type MutationUpdateCvArgs = {
  data: CvUpdateInput;
  where: CvWhereUniqueInput;
};


export type MutationUpdateCvsArgs = {
  data: Array<CvUpdateArgs>;
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

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Post_Content_Document>;
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
  content?: InputMaybe<Scalars['JSON']['input']>;
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
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Post_Content_Document = {
  __typename?: 'Post_content_Document';
  document: Scalars['JSON']['output'];
};


export type Post_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  cV?: Maybe<Cv>;
  cVS?: Maybe<Array<Cv>>;
  cVSCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
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

export type SkillCreateInput = {
  cvs?: InputMaybe<CvRelateToManyForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
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
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SkillWhereInput = {
  AND?: InputMaybe<Array<SkillWhereInput>>;
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  OR?: InputMaybe<Array<SkillWhereInput>>;
  cvs?: InputMaybe<CvManyRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
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
  title?: Maybe<Scalars['String']['output']>;
};

export type StoryCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
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
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserProfileCreateInput = {
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserProfileOrderByInput = {
  dateOfBirth?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  middleName?: InputMaybe<OrderDirection>;
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
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserProfileWhereInput = {
  AND?: InputMaybe<Array<UserProfileWhereInput>>;
  NOT?: InputMaybe<Array<UserProfileWhereInput>>;
  OR?: InputMaybe<Array<UserProfileWhereInput>>;
  dateOfBirth?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  middleName?: InputMaybe<StringFilter>;
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

export type GetSelfQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetSelfQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email?: string | null, username?: string | null, profile?: { __typename?: 'UserProfile', firstName?: string | null, lastName?: string | null, middleName?: string | null } | null } | null };


export const GetSelfDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSelf"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}}]}}]}}]}}]} as unknown as DocumentNode<GetSelfQuery, GetSelfQueryVariables>;