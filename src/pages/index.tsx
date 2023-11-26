import { wrapper } from '../store';
import { ICharacter } from '../utils/types/ICharacter';
import { apiService } from '../utils/services/ApiServices';
import { updateSearchParams } from '../utils/helpers/update-search-params';
import { useRouter } from 'next/router';
import ErrorButton from '../components/error-button/ErrorButton';
import CardsCountSelector from '../components/cards-count-selector/CardsCountSelector';
import CardList from '../components/card-list/CardList';
import Pagination from '../components/pagination/Pagination';
import Details from '../components/details/Details';
import {
  INITIAL_DETAILSID,
  INITIAL_ITEMS_COUNT,
  INITIAL_PAGE,
  INITIAL_SEARCH,
} from '../utils/constants/constants';
import Head from 'next/head';

export const getServerSideProps = wrapper.getServerSideProps(
  () => async (context) => {
    const { page, limit, search, details } = context.query;

    const currentPage = page || INITIAL_PAGE;
    const limitItems = limit || INITIAL_ITEMS_COUNT;
    const searchValue = search?.toString() || INITIAL_SEARCH;
    const detailsID = details?.toString() || INITIAL_DETAILSID;
    const offset = +limitItems * (+currentPage - 1);

    const charactersResponse = searchValue
      ? await apiService.getCharactersByName(+limitItems, offset, searchValue)
      : await apiService.getCharacters(+limitItems, offset);

    const characterResponse = detailsID
      ? await apiService.getCharacterById(detailsID)
      : { results: [] };

    return {
      props: {
        characters: charactersResponse.results,
        character: characterResponse.results,
        totalPage: Math.ceil(charactersResponse.total / +limitItems),
      },
    };
  }
);

type MainPageProps = {
  characters: ICharacter[];
  character: ICharacter[];
  totalPage: number;
};

const MainPage = ({ characters, character, totalPage }: MainPageProps) => {
  const router = useRouter();
  const detailsID = (router.query.details as string) || INITIAL_DETAILSID;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.githubusercontent.com/Kirich8/rss-react/react-routing/src/assets/favicon.ico"
        />
        <title>Marvel Heroes</title>
      </Head>
      <div className="main__catalog catalog">
        <div
          className={`catalog__content ${detailsID ? 'blur' : ''}`}
          onClick={() => {
            if (detailsID) updateSearchParams(router, 'details', '');
          }}
        >
          <div className="catalog__settings">
            <ErrorButton />
            <CardsCountSelector />
          </div>
          <CardList characters={characters} />
          <Pagination totalPage={totalPage} />
        </div>
        {character.length > 0 && <Details character={character} />}
      </div>
    </>
  );
};

export default MainPage;
