import {useEffect, useState} from 'react';
import './App.css';

export interface cardData {
    companyName: string;
    projectType: string;
    title: string;
    subtitle: string;
    location: string;
}

const App = () => {
    const [cards, setCards] = useState<cardData[]>([]);

    const [searchResults, setSearchResults] = useState<cardData[]>([]);

    const handleChange = (event: any) => {
        const value = event.target.value?.trim();
        const res = cards.find((obj: cardData) => obj.companyName?.toLowerCase()?.includes(value?.toLowerCase()) ||
            obj.projectType?.toLowerCase()?.includes(value?.toLowerCase()) ||
            obj.title?.toLowerCase()?.includes(value?.toLowerCase()) ||
            obj.subtitle?.toLowerCase()?.includes(value?.toLowerCase()))
        setSearchResults(res as any);
    }
    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(
                'https://locusview-for-everyone.herokuapp.com/api/projects/all?page=1&limit=20&sort=new'
            );
            const data = (await response.json()).data;
            const currentCards: cardData[] = data.projects.map(
                (project: any) =>
                    ({
                        projectType: require('./assets/' + project.projectType + '.png'),
                        companyName: project.companyName,
                        requiredQualifications: project.requiredQualifications,
                        projectName: project.projectName,
                        contractor: project.contractor,
                        startDate: project.startDate,
                        dueDate: project.dueDate,
                        title: project.title,
                        subtitle: project.description,
                        location: project.location,
                    } as cardData)
            );
            setCards(currentCards);
        };
        loadData();
    }, []);

    return (
        <div className="landing-page-option-2 flex-col-hstart-vstart clip-contents">
            <div className="grad"/>
            {/* <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ivm2vajblje-0%3A26?alt=media&token=197fc93a-48d2-43d0-afbd-c3b94be98a84"
        alt="Not Found"
        className="background-elements"
      /> */}
            <div className="background-elements-1"></div>
            {/* <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ivm2vajblje-0%3A69?alt=media&token=22568be0-ea09-4549-9861-b4289e437738"
        alt="Not Found"
        className="background-elements-1"
      /> */}
            <div className="rectangle-10">
                <span className="top-text">Checkout Our </span>
                <span className="top-text-stroke">Locusview Academy</span>
                <span className="top-text"> for new skills everyday</span>
            </div>
            <p className="txt-410 flex-hend button">Sign Up</p>
            <p className="txt-528 flex-hcenter">
        <span>
          Thousands of opportunities tailored for your skills, availabilities
          and desired income.
        </span>
                <br/>
                <span>
          A marketplace to answer fluctuated demand in the utility industry
        </span>
            </p>
            <div className="group-1 flex-row">
                <p className="txt-113 button">Home</p>
                <p className="txt-113 button">Find Jobs</p>
                <p className="txt-113 button">Job Alerts</p>
                <p className="txt-113 button">Career Advice</p>
                <p className="txt-113 button">Communicate</p>
            </div>
            <div className="group-494 button">
                <p className="txt-136 flex-hcenter">Sign In</p>
            </div>
            {/* <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ivm2vajblje-0%3A105?alt=media&token=5275c118-b5c3-479c-b8a2-3d17e5422217"
        alt="Not Found"
        className="locusview-logo"
      /> */}
            <div className="locusview-logo">
                <svg
                    width="225"
                    height="52"
                    viewBox="0 0 225 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M144.2 32.21C143.74 31.23 143.38 30.12 143.12 28.86C142.86 27.6 142.69 26.28 142.6 24.88C142.51 23.48 142.46 22.09 142.46 20.71C142.46 18.82 142.5 17.06 142.58 15.43C142.63 14.32 142.65 13.35 142.66 12.53V10.64C142.67 8.55999 142.61 7.50999 142.48 7.47999C142.4 7.47999 142.27 7.90999 142.08 8.76999C141.9 9.61999 141.65 10.92 141.34 12.67C140.92 15.05 140.51 17.08 140.11 18.77C139.72 20.45 139.31 21.74 138.89 22.64C138.48 23.54 138.04 23.99 137.56 23.99C136.34 23.99 134.73 20.7 132.75 14.13C132.6 13.63 132.44 13.05 132.27 12.41C132.03 11.49 131.79 10.65 131.55 9.87999C131.31 9.10999 131.1 8.72999 130.92 8.72999C130.66 8.72999 130.51 9.71999 130.47 11.71C131.26 15.67 131.66 19.12 131.66 22.09C131.66 23.69 131.51 24.99 131.22 25.97C131.04 26.44 130.81 26.68 130.55 26.68C130.31 26.68 130.13 26.48 130 26.09C129.7 24.98 129.55 22.74 129.55 19.38C129.55 17.03 129.6 14.72 129.71 12.45C129.51 11.19 129.23 9.94999 128.88 8.72999C128.86 9.05999 128.85 9.47999 128.85 9.98999C128.85 10.64 128.87 11.44 128.9 12.41C128.9 12.56 128.85 12.68 128.76 12.75C128.67 12.82 128.57 12.86 128.46 12.86C128.35 12.86 128.25 12.82 128.16 12.75C128.08 12.68 128.03 12.57 128.02 12.44C127.98 11.51 127.97 10.72 127.97 10.06C127.97 7.89999 128.2 6.81999 128.67 6.81999C128.87 6.81999 129.1 7.06999 129.35 7.55999C129.55 7.92999 129.76 8.57999 129.98 9.49999C130.18 8.32999 130.45 7.74999 130.8 7.74999C131.25 7.74999 131.78 8.58999 132.41 10.27C132.81 11.34 133.18 12.47 133.52 13.67L133.57 13.88C134.54 17.04 135.33 19.36 135.96 20.84C136.59 22.31 137.12 23.04 137.56 23.04C137.9 23.04 138.21 22.65 138.49 21.86C138.77 21.08 139.06 19.95 139.35 18.48C139.65 17 139.98 15.22 140.35 13.13C141.21 8.33999 141.94 5.93999 142.55 5.93999C142.82 5.93999 143.05 6.46999 143.23 7.52999C143.43 8.73999 143.54 10.52 143.56 12.86C143.56 13.74 143.53 14.81 143.48 16.07C143.4 17.72 143.36 19.47 143.36 21.32C143.36 22.6 143.4 23.86 143.48 25.12M130.63 24.22C130.71 23.42 130.75 22.62 130.75 21.84C130.75 20.43 130.65 19 130.46 17.56V18.68C130.47 20.54 130.52 22.39 130.62 24.22H130.63Z"
                        fill="#2A2977"
                    />
                    <path
                        d="M151.16 30.74C150.26 30.74 149.81 29.49 149.81 26.99C149.81 25.87 149.91 24.53 150.11 22.97C149.12 24.54 148.26 25.65 147.54 26.31C146.83 26.97 146.25 27.29 145.8 27.29C145.4 27.29 145.1 27.08 144.91 26.67C144.72 26.26 144.62 25.74 144.62 25.13C144.62 24.52 144.71 23.9 144.88 23.22C145.05 22.54 145.31 21.89 145.65 21.29C146 20.69 146.42 20.2 146.91 19.81C147.41 19.42 147.99 19.22 148.63 19.22C149.11 19.22 149.64 19.36 150.2 19.63C150.36 19.73 150.43 19.85 150.43 20C150.43 20.11 150.39 20.21 150.31 20.31C150.23 20.4 150.13 20.45 150.01 20.45C149.95 20.45 149.88 20.44 149.8 20.41C149.46 20.25 149.14 20.16 148.83 20.16C148.32 20.16 147.85 20.34 147.42 20.71C147 21.07 146.64 21.53 146.33 22.08C146.03 22.62 145.79 23.18 145.62 23.76C145.46 24.33 145.37 24.84 145.37 25.28C145.37 25.59 145.42 25.84 145.51 26.03C145.6 26.22 145.74 26.32 145.93 26.32C146.18 26.32 146.5 26.14 146.9 25.79C147.31 25.43 147.81 24.82 148.4 23.99C149 23.14 149.7 22.01 150.49 20.59C150.6 20.44 150.72 20.36 150.86 20.36C150.97 20.36 151.07 20.4 151.16 20.48C151.26 20.56 151.31 20.67 151.31 20.79V20.9C151.31 20.9 151.35 21 151.35 21.16C151.35 21.54 151.27 22.26 151.12 23.31C151.02 24.06 150.92 24.85 150.82 25.69C150.73 26.52 150.68 27.27 150.68 27.95C150.68 29.18 150.89 29.8 151.31 29.8C152 29.8 153.32 28.04 155.25 24.52C155.35 24.36 155.48 24.29 155.63 24.29C155.7 24.29 155.77 24.31 155.84 24.34C156 24.45 156.07 24.58 156.07 24.74C156.07 24.81 156.05 24.88 156.02 24.95C154.92 26.96 153.96 28.42 153.15 29.35C152.34 30.29 151.67 30.76 151.15 30.76L151.16 30.74Z"
                        fill="#2A2977"
                    />
                    <path
                        d="M156.33 29.38C156.18 29.38 156.02 29.23 155.88 28.94C155.73 28.64 155.61 28.19 155.51 27.59C155.27 26.18 155.15 25.04 155.15 24.17C155.15 23.35 155.24 22.73 155.42 22.31C155.6 21.89 155.86 21.6 156.2 21.45C156.16 21.14 156.11 20.9 156.05 20.74C156.01 20.78 155.97 20.82 155.93 20.86C155.89 20.91 155.85 20.95 155.79 21C155.74 21.04 155.67 21.05 155.6 21.05C155.54 21.05 155.47 21.03 155.39 21C155.23 20.9 155.14 20.77 155.14 20.62C155.14 20.55 155.16 20.48 155.19 20.42C155.45 19.95 155.73 19.71 156.01 19.71C156.11 19.71 156.22 19.74 156.32 19.79C156.59 19.96 156.81 20.46 156.96 21.27H157.4C157.8 21.26 158.2 21.29 158.59 21.35C158.98 21.4 159.37 21.43 159.77 21.43C160.51 21.43 161.17 21.23 161.77 20.84C161.85 20.79 161.93 20.76 162.02 20.76C162.14 20.76 162.24 20.81 162.32 20.91C162.41 21 162.46 21.11 162.46 21.22C162.46 21.35 162.4 21.46 162.27 21.56C161.84 21.84 161.44 22.04 161.05 22.15C160.67 22.25 160.3 22.3 159.94 22.3C159.55 22.3 159.15 22.27 158.75 22.2C158.36 22.14 157.93 22.1 157.48 22.1H157.1C157.21 23.03 157.26 23.96 157.26 24.92C157.26 25.79 157.21 26.63 157.11 27.45C157.03 28.08 156.91 28.56 156.77 28.89C156.63 29.22 156.48 29.38 156.32 29.38H156.33ZM156.38 27.59C156.4 26.95 156.41 26.31 156.41 25.66C156.41 24.6 156.38 23.55 156.31 22.52C156.09 22.84 155.98 23.35 155.98 24.07C155.98 24.48 156.01 24.91 156.06 25.37C156.11 25.82 156.17 26.24 156.24 26.63C156.3 27.02 156.35 27.35 156.38 27.6V27.59Z"
                        fill="#2A2977"
                    />
                    <path
                        d="M162.63 32.8C162.52 32.8 162.42 32.76 162.33 32.68C162.24 32.61 162.19 32.51 162.19 32.39C162.19 32.33 162.19 32.28 162.2 32.25C162.42 31.41 162.58 30.2 162.69 28.63C162.79 27.05 162.84 25.28 162.84 23.3C162.82 17.46 162.46 12.11 161.76 7.24999C161.31 6.74999 161 6.21999 160.82 5.64999C160.63 5.07999 160.53 4.57999 160.53 4.12999C160.53 3.75999 160.58 3.44999 160.68 3.20999C160.78 2.96999 160.91 2.84999 161.06 2.84999C161.21 2.84999 161.37 2.97999 161.55 3.22999C161.72 3.48999 161.9 3.89999 162.08 4.48999C162.25 5.06999 162.42 5.84999 162.57 6.82999C162.73 6.97999 162.92 7.12999 163.13 7.26999C163.27 7.36999 163.34 7.48999 163.34 7.62999C163.34 7.70999 163.32 7.78999 163.27 7.85999C163.18 8.00999 163.06 8.07999 162.9 8.07999C162.85 8.07999 162.82 8.07999 162.79 8.06999C162.77 8.06999 162.76 8.05999 162.75 8.05999C163.38 12.81 163.69 17.91 163.69 23.36C163.69 25.75 163.61 27.85 163.46 29.66C164.06 28.49 164.73 27.24 165.46 25.9C166.97 23.12 167.98 21.35 168.5 20.6C168.79 20.24 169.03 20.05 169.22 20.05C169.41 20.05 169.52 20.2 169.55 20.49C169.55 20.67 169.49 20.89 169.37 21.15L169.03 21.9C168.71 22.64 168.15 23.85 167.35 25.52C166.99 26.2 166.82 26.76 166.82 27.19C166.82 27.55 166.98 27.74 167.31 27.74C168.25 27.74 169.93 26.65 172.34 24.46C172.43 24.38 172.53 24.34 172.64 24.34C172.75 24.34 172.85 24.39 172.95 24.48C173.02 24.57 173.06 24.67 173.06 24.78C173.06 24.9 173.01 25.01 172.92 25.11C170.67 27.15 168.99 28.3 167.88 28.54C167.65 28.59 167.45 28.62 167.26 28.62C166.43 28.62 166 28.16 165.96 27.23C165.96 27.08 165.97 26.92 166 26.75C164.37 29.78 163.37 31.71 163.01 32.55C162.91 32.73 162.78 32.82 162.61 32.82L162.63 32.8Z"
                        fill="#2A2977"
                    />
                    <path
                        d="M174.89 28.95C174.37 28.95 173.88 28.79 173.41 28.46C172.64 27.88 172.26 27.01 172.26 25.86C172.26 25.31 172.34 24.77 172.51 24.23C172.68 23.68 172.9 23.2 173.15 22.79C173.54 22.2 173.97 21.76 174.42 21.46C174.88 21.16 175.29 21.01 175.66 21.01C175.97 21.01 176.23 21.11 176.43 21.31C176.64 21.51 176.74 21.81 176.74 22.2C176.74 22.73 176.5 23.43 176.03 24.31C175.73 24.82 175.33 25.31 174.84 25.79C174.35 26.25 173.84 26.63 173.32 26.91C173.46 27.27 173.67 27.55 173.95 27.76C174.23 27.97 174.55 28.07 174.91 28.07C175.75 28.07 176.76 27.58 177.93 26.61C178.77 25.92 179.51 25.19 180.16 24.42C180.26 24.32 180.37 24.27 180.47 24.27C180.59 24.27 180.69 24.32 180.78 24.41C180.88 24.5 180.93 24.61 180.93 24.72C180.93 24.81 180.89 24.9 180.82 24.99C180.03 25.91 179.17 26.73 178.25 27.45C176.99 28.44 175.87 28.94 174.87 28.94L174.89 28.95ZM173.15 26.01C173.55 25.76 173.94 25.45 174.33 25.07C174.72 24.69 175.04 24.29 175.27 23.88C175.69 23.11 175.9 22.57 175.9 22.25C175.9 21.99 175.8 21.87 175.61 21.87C175.38 21.87 175.1 22 174.78 22.25C174.46 22.51 174.16 22.84 173.89 23.26C173.39 24.12 173.14 24.95 173.14 25.76V26.01H173.15Z"
                        fill="#2A2977"
                    />
                    <path
                        d="M182.29 28.37C181.62 28.37 181.12 28.08 180.79 27.49C180.46 26.91 180.3 26.18 180.3 25.3V25.18C180.33 23.92 180.34 22.53 180.34 21V19.03C180.14 19.21 179.99 19.39 179.89 19.55C179.79 19.71 179.67 19.78 179.53 19.78C179.41 19.78 179.31 19.74 179.22 19.66C179.12 19.58 179.07 19.48 179.07 19.36C179.07 19.3 179.09 19.23 179.12 19.15C179.36 18.71 179.75 18.31 180.31 17.95V17.91C180.26 14.05 180.04 10.45 179.67 7.09999C179.28 6.54999 179 5.96999 178.85 5.35999C178.69 4.74999 178.6 4.22999 178.6 3.78999C178.6 3.32999 178.65 2.98999 178.74 2.78999C178.83 2.57999 178.95 2.47999 179.08 2.47999C179.27 2.47999 179.48 2.67999 179.71 3.06999C179.93 3.44999 180.09 3.97999 180.2 4.65999C180.31 5.32999 180.41 6.01999 180.5 6.74999C180.58 6.84999 180.67 6.94999 180.76 7.03999C180.85 7.12999 180.9 7.23999 180.9 7.34999C180.9 7.44999 180.86 7.54999 180.79 7.63999C180.74 7.68999 180.69 7.73999 180.61 7.75999C180.87 10.28 181.04 12.85 181.12 15.44C181.15 16.11 181.17 16.78 181.17 17.45C181.77 17.16 182.21 17.01 182.5 17.01C182.65 17.01 182.76 17.06 182.83 17.15C182.9 17.24 182.94 17.34 182.94 17.45C182.94 17.56 182.9 17.66 182.83 17.75C182.76 17.84 182.65 17.89 182.52 17.89C182.39 17.89 182.21 17.94 181.97 18.04C181.73 18.14 181.48 18.27 181.2 18.44V20.6C181.21 22.3 181.2 23.83 181.17 25.21V25.35C181.17 26.79 181.55 27.51 182.32 27.51C182.59 27.51 182.93 27.41 183.33 27.2C183.85 26.91 184.31 26.53 184.71 26.05C185.12 25.58 185.38 25.11 185.49 24.64C185.51 24.53 185.56 24.45 185.64 24.39C185.72 24.33 185.81 24.29 185.91 24.29C186.06 24.29 186.17 24.35 186.24 24.44C186.31 24.52 186.35 24.61 186.35 24.71V24.81C186.21 25.39 185.9 25.98 185.41 26.56C184.93 27.14 184.37 27.61 183.74 27.95C183.19 28.23 182.71 28.37 182.29 28.37Z"
                        fill="#2A2977"
                    />
                    <path
                        d="M187.54 41.78C187.28 41.78 187.02 41.58 186.77 41.19C186.52 40.81 186.32 40.21 186.17 39.39C185.48 35.5 185.13 32.13 185.13 29.27C185.13 25.49 185.7 22.75 186.84 21.07C186.71 20.21 186.6 19.66 186.5 19.42C186.47 19.36 186.46 19.29 186.46 19.23C186.46 19.1 186.51 19 186.6 18.93C186.7 18.85 186.81 18.81 186.93 18.81C187.08 18.81 187.2 18.9 187.3 19.07C187.39 19.28 187.48 19.65 187.57 20.19C188.27 19.52 189.04 19.18 189.88 19.18C190.55 19.18 191.18 19.38 191.77 19.78C192.35 20.17 192.83 20.69 193.19 21.34C193.55 21.98 193.74 22.67 193.74 23.42C193.74 24.07 193.57 24.72 193.23 25.38C192.89 26.04 192.34 26.65 191.58 27.23C190.82 27.8 189.81 28.3 188.53 28.71C188.77 31.85 188.89 34.61 188.89 36.98C188.89 37.72 188.88 38.38 188.85 38.98C188.79 39.88 188.63 40.58 188.39 41.07C188.14 41.56 187.87 41.81 187.56 41.81L187.54 41.78ZM188.44 27.79C189.52 27.43 190.39 27 191.04 26.52C191.69 26.03 192.15 25.51 192.43 24.96C192.71 24.4 192.85 23.87 192.85 23.35C192.85 22.47 192.55 21.7 191.95 21.05C191.35 20.4 190.67 20.08 189.91 20.08C189.09 20.08 188.37 20.49 187.75 21.3C188 23.03 188.22 25.2 188.43 27.79H188.44ZM187.56 40.76C187.75 40.76 187.88 40.14 187.96 38.9C188 38.3 188.01 37.62 188.01 36.88C188.01 34.59 187.89 31.94 187.65 28.92C187.24 29.03 186.94 29.09 186.75 29.11C186.62 29.11 186.52 29.06 186.45 28.97C186.38 28.87 186.34 28.76 186.34 28.66C186.34 28.44 186.45 28.3 186.68 28.25C187 28.19 187.3 28.11 187.58 28.03C187.42 25.93 187.23 24.1 187.03 22.53C186.33 24.11 185.98 26.34 185.98 29.23C185.98 32.12 186.33 35.35 187.02 39.21C187.22 40.24 187.4 40.75 187.55 40.75L187.56 40.76Z"
                        fill="#2A2977"
                    />
                    <path
                        d="M197.66 28.36C197.4 28.36 197.16 28.29 196.94 28.15C195.46 27.24 194.57 23.26 194.26 16.23C193.84 16.49 193.36 16.61 192.81 16.61H192.6C192.46 16.61 192.36 16.56 192.3 16.47C192.23 16.38 192.19 16.28 192.19 16.17C192.19 16.07 192.23 15.97 192.3 15.88C192.36 15.79 192.46 15.74 192.6 15.74H192.75C193.33 15.74 193.82 15.54 194.2 15.14C194.14 12.93 194.1 10.9 194.08 9.02999L194.05 7.71999C194.01 7.02999 194 6.23999 194 5.34999C194 2.53999 194.29 1.08999 194.86 0.98999H194.87C195.16 0.98999 195.41 1.21999 195.61 1.66999C195.81 2.12999 195.97 2.70999 196.1 3.41999C196.24 4.12999 196.34 4.87999 196.41 5.67999C196.48 6.46999 196.53 7.21999 196.56 7.93999C196.6 8.63999 196.61 9.19999 196.61 9.61999V10.08C196.47 12.53 195.96 14.33 195.07 15.48C195.14 17.34 195.26 19.12 195.43 20.81C195.59 22.51 195.83 23.95 196.13 25.13C196.44 26.31 196.85 27.07 197.36 27.39C197.46 27.44 197.57 27.47 197.69 27.47C198.36 27.47 199.28 26.47 200.42 24.48C200.53 24.33 200.65 24.26 200.78 24.26C200.9 24.26 201 24.3 201.09 24.38C201.19 24.46 201.24 24.57 201.24 24.69C201.24 24.76 201.22 24.84 201.19 24.91C199.87 27.2 198.69 28.34 197.66 28.34V28.36ZM195.04 13.84C195.44 12.77 195.67 11.51 195.74 10.04C195.74 9.60999 195.72 8.96999 195.67 8.10999C195.62 7.23999 195.57 6.32999 195.49 5.37999C195.3 3.04999 195.1 1.87999 194.89 1.87999C194.87 1.87999 194.86 2.05999 194.86 2.40999C194.86 4.04999 194.88 5.76999 194.93 7.55999V8.48999C194.95 10.09 194.98 11.88 195.04 13.84Z"
                        fill="#2A2977"
                    />
                    <path
                        d="M206.83 30.74C205.93 30.74 205.48 29.49 205.48 26.99C205.48 25.87 205.58 24.53 205.78 22.97C204.79 24.54 203.93 25.65 203.21 26.31C202.5 26.97 201.92 27.29 201.47 27.29C201.07 27.29 200.77 27.08 200.58 26.67C200.39 26.26 200.29 25.74 200.29 25.13C200.29 24.52 200.38 23.9 200.55 23.22C200.72 22.54 200.98 21.89 201.32 21.29C201.67 20.69 202.09 20.2 202.58 19.81C203.08 19.42 203.66 19.22 204.3 19.22C204.78 19.22 205.31 19.36 205.87 19.63C206.02 19.73 206.1 19.85 206.1 20C206.1 20.11 206.06 20.21 205.98 20.31C205.9 20.4 205.8 20.45 205.68 20.45C205.62 20.45 205.55 20.44 205.47 20.41C205.13 20.25 204.81 20.16 204.5 20.16C203.99 20.16 203.52 20.34 203.09 20.71C202.67 21.07 202.31 21.53 202 22.08C201.7 22.62 201.46 23.18 201.29 23.76C201.13 24.33 201.04 24.84 201.04 25.28C201.04 25.59 201.09 25.84 201.18 26.03C201.27 26.22 201.41 26.32 201.6 26.32C201.85 26.32 202.17 26.14 202.57 25.79C202.98 25.43 203.48 24.82 204.07 23.99C204.67 23.14 205.37 22.01 206.16 20.59C206.27 20.44 206.39 20.36 206.53 20.36C206.64 20.36 206.74 20.4 206.83 20.48C206.93 20.56 206.98 20.67 206.98 20.79V20.9C206.98 20.9 207.02 21 207.02 21.16C207.02 21.54 206.94 22.26 206.79 23.31C206.69 24.06 206.59 24.85 206.49 25.69C206.4 26.52 206.35 27.27 206.35 27.95C206.35 29.18 206.56 29.8 206.98 29.8C207.67 29.8 208.99 28.04 210.92 24.52C211.02 24.36 211.15 24.29 211.3 24.29C211.37 24.29 211.44 24.31 211.51 24.34C211.66 24.45 211.74 24.58 211.74 24.74C211.74 24.81 211.72 24.88 211.69 24.95C210.59 26.96 209.63 28.42 208.82 29.35C208.01 30.29 207.34 30.76 206.82 30.76L206.83 30.74Z"
                        fill="#2A2977"
                    />
                    <path
                        d="M211.71 30.05C211.16 30.05 210.78 29.85 210.55 29.46C210.31 29.08 210.19 28.59 210.19 28.01C210.19 27.2 210.36 26.31 210.7 25.36C211.04 24.39 211.44 23.56 211.92 22.87C212.4 22.18 212.86 21.83 213.29 21.83C213.36 21.83 213.44 21.84 213.51 21.87C213.79 21.99 214 22.2 214.14 22.5C214.28 22.79 214.38 23.09 214.45 23.39L214.55 23.76C214.55 23.89 214.5 23.99 214.4 24.06C214.31 24.13 214.2 24.17 214.09 24.17C213.89 24.17 213.76 24.07 213.69 23.87L213.64 23.64C213.49 23.03 213.35 22.71 213.2 22.7C213.07 22.7 212.83 23.01 212.48 23.64C212.12 24.27 211.79 25 211.47 25.84C211.16 26.67 211.01 27.39 211.01 28.01C211.01 28.77 211.31 29.14 211.9 29.14C212.75 29.14 214.2 28.32 216.25 26.68C216.34 26.62 216.43 26.58 216.52 26.58C216.65 26.58 216.76 26.63 216.86 26.74C216.92 26.82 216.96 26.91 216.96 27C216.96 27.13 216.91 27.24 216.8 27.34C214.56 29.14 212.87 30.03 211.74 30.03L211.71 30.05Z"
                        fill="#2A2977"
                    />
                    <path
                        d="M218.92 28.95C218.4 28.95 217.91 28.79 217.44 28.46C216.67 27.88 216.29 27.01 216.29 25.86C216.29 25.31 216.37 24.77 216.54 24.23C216.71 23.68 216.93 23.2 217.18 22.79C217.57 22.2 218 21.76 218.45 21.46C218.91 21.16 219.32 21.01 219.69 21.01C220 21.01 220.26 21.11 220.46 21.31C220.67 21.51 220.77 21.81 220.77 22.2C220.77 22.73 220.53 23.43 220.06 24.31C219.76 24.82 219.36 25.31 218.87 25.79C218.38 26.25 217.87 26.63 217.35 26.91C217.49 27.27 217.7 27.55 217.98 27.76C218.26 27.97 218.58 28.07 218.94 28.07C219.78 28.07 220.79 27.58 221.96 26.61C222.8 25.92 223.54 25.19 224.19 24.42C224.29 24.32 224.4 24.27 224.5 24.27C224.62 24.27 224.72 24.32 224.81 24.41C224.91 24.5 224.96 24.61 224.96 24.72C224.96 24.81 224.92 24.9 224.85 24.99C224.06 25.91 223.2 26.73 222.28 27.45C221.02 28.44 219.9 28.94 218.9 28.94L218.92 28.95ZM217.18 26.01C217.58 25.76 217.97 25.45 218.36 25.07C218.75 24.69 219.07 24.29 219.3 23.88C219.72 23.11 219.93 22.57 219.93 22.25C219.93 21.99 219.83 21.87 219.64 21.87C219.41 21.87 219.13 22 218.81 22.25C218.49 22.51 218.19 22.84 217.92 23.26C217.42 24.12 217.17 24.95 217.17 25.76V26.01H217.18Z"
                        fill="#2A2977"
                    />
                    <path
                        d="M130.79 21.85C130.79 22.63 130.75 23.43 130.67 24.23C130.57 22.4 130.52 20.55 130.52 18.69V17.57C130.7 19.01 130.79 20.44 130.79 21.85Z"
                        fill="#2A2977"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.9752 37.0789L15.9686 37.1046L28.8277 37.1052C29.3238 38.022 29.7814 38.5629 30.6411 39.2491C30.6453 39.4973 30.6475 39.7473 30.6475 39.9994C30.6475 46.5154 29.1924 51.8329 27.3865 52C20.8663 51.8329 15.6126 46.5154 15.6126 39.9994C15.6126 38.9923 15.7389 38.014 15.9752 37.0789ZM2.50643 28.241C3.13697 28.241 3.7126 28.3699 4.2327 28.6267C4.75281 28.8841 5.01299 29.3014 5.01299 29.8798V47.3679H14.3659C14.8699 47.3679 15.2484 47.6013 15.5011 48.0666C15.7531 48.5327 15.8792 49.0547 15.8792 49.6326C15.8792 50.1793 15.7531 50.693 15.5011 51.1751C15.2484 51.6568 14.8699 51.8978 14.3659 51.8978H2.22288C1.68633 51.8978 1.1823 51.7532 0.709552 51.4642C0.236559 51.1751 0 50.7577 0 50.211V29.8798C0 29.3014 0.260054 28.8841 0.780532 28.6267C1.30064 28.3699 1.8754 28.241 2.50643 28.241ZM27.3865 28C27.7096 28.0082 28.0252 28.0287 28.3334 28.0614C28.9117 28.7922 29.4212 30.6065 29.7051 31.6593C29.4292 31.9173 29.2695 32.105 29.0475 32.4315H18.413C18.4093 32.4356 18.406 32.4394 18.4025 32.4437H18.3201C20.4761 29.8081 23.7306 28.0937 27.3865 28ZM69.1632 50.4186C67.6654 49.5355 66.4748 48.3629 65.5927 46.9007C64.7095 45.4393 64.2684 43.8886 64.2684 42.2502V29.9329C64.2684 29.5156 64.5124 29.1302 65.0014 28.7761C65.49 28.423 66.0657 28.2461 66.7277 28.2461C67.4208 28.2461 68.012 28.423 68.5011 28.7761C68.9896 29.1302 69.2342 29.5156 69.2342 29.9329V42.2502C69.2342 43.1177 69.4468 43.9293 69.8724 44.684C70.298 45.4393 70.873 46.0574 71.5986 46.5392C72.3234 47.0212 73.143 47.2622 74.0577 47.2622C74.9401 47.2622 75.7439 47.0212 76.4695 46.5392C77.1945 46.0574 77.7702 45.4308 78.1958 44.6597C78.6213 43.8886 78.8343 43.0859 78.8343 42.2502V29.8845C78.8343 29.435 79.086 29.0495 79.5909 28.7282C80.0947 28.4072 80.6786 28.2461 81.3407 28.2461C82.0656 28.2461 82.6565 28.4072 83.1141 28.7282C83.5707 29.0495 83.7998 29.435 83.7998 29.8845V42.2502C83.7998 43.9534 83.3578 45.5274 82.4755 46.9732C81.5924 48.4185 80.4103 49.5753 78.9289 50.4428C77.4466 51.3101 75.8385 51.7441 74.1051 51.7441C72.3078 51.7441 70.6601 51.3028 69.1632 50.4186ZM89.7397 51.1658C88.5103 50.7802 87.5407 50.2909 86.8315 49.6957C86.1219 49.1018 85.7674 48.4995 85.7674 47.8886C85.7674 47.5995 85.8383 47.2786 85.98 46.925C86.1219 46.5717 86.3266 46.2668 86.595 46.0091C86.8625 45.7523 87.1542 45.6239 87.4697 45.6239C87.8792 45.6239 88.3129 45.8089 88.7703 46.1778C89.227 46.5478 89.8342 46.9173 90.5911 47.2862C91.3479 47.6562 92.4037 47.8406 93.7594 47.8406C95.3356 47.8406 96.3997 47.5679 96.9518 47.0212C97.503 46.4754 97.7793 45.8812 97.7793 45.2382C97.7793 44.4032 97.503 43.7526 96.9518 43.2864C96.3997 42.821 95.6902 42.443 94.8235 42.154C93.9559 41.8649 93.0337 41.5838 92.057 41.3106C91.0794 41.0379 90.1573 40.6767 89.2904 40.2263C88.423 39.7767 87.7137 39.1503 87.1625 38.3468C86.6105 37.5441 86.335 36.484 86.335 35.1663C86.335 34.0743 86.6022 32.9902 87.1386 31.9134C87.6743 30.8371 88.5339 29.954 89.7161 29.2629C90.8984 28.5724 92.4825 28.2265 94.4689 28.2265C95.6666 28.2265 96.8018 28.3554 97.8739 28.6123C98.9452 28.8696 99.8283 29.2146 100.522 29.6482C101.215 30.0819 101.563 30.5564 101.563 31.07C101.563 31.2952 101.484 31.6083 101.326 32.0098C101.168 32.4118 100.955 32.765 100.688 33.0698C100.419 33.3755 100.08 33.5277 99.6708 33.5277C99.3552 33.5277 98.9616 33.4071 98.4886 33.1661C98.0156 32.9254 97.4639 32.6927 96.8333 32.4675C96.2023 32.2432 95.4301 32.1301 94.5161 32.1301C93.6013 32.1301 92.8684 32.283 92.317 32.5881C91.7651 32.8938 91.3633 33.2552 91.1113 33.6721C90.8584 34.09 90.7328 34.5082 90.7328 34.9252C90.7328 35.6325 91.0004 36.1783 91.5368 36.5636C92.0725 36.9493 92.7821 37.2709 93.6648 37.5277C94.5472 37.7851 95.4775 38.0502 96.4552 38.3228C97.432 38.5959 98.3541 38.9899 99.2217 39.5035C100.088 40.0176 100.798 40.7083 101.35 41.5756C101.901 42.443 102.177 43.5996 102.177 45.0455C102.177 47.0695 101.46 48.6922 100.025 49.9127C98.5907 51.1341 96.5498 51.7442 93.9014 51.7442C92.3562 51.7442 90.9693 51.5512 89.7397 51.1658ZM112.368 51.5759C111.943 51.3987 111.666 51.1505 111.541 50.829L103.596 31.3115C103.564 31.2151 103.525 31.0869 103.477 30.9258C103.43 30.7654 103.406 30.621 103.406 30.4922C103.406 30.0751 103.588 29.7052 103.95 29.3838C104.313 29.0631 104.738 28.8054 105.227 28.6127C105.716 28.42 106.18 28.3236 106.622 28.3236C106.937 28.3236 107.244 28.3957 107.545 28.5404C107.844 28.685 108.041 28.9184 108.136 29.2391L113.811 44.4675L119.391 29.3354C119.516 29.0147 119.706 28.7656 119.958 28.5888C120.21 28.4123 120.526 28.3236 120.904 28.3236C121.251 28.3236 121.685 28.42 122.205 28.6127C122.725 28.8054 123.181 29.0704 123.576 29.4077C123.97 29.745 124.167 30.1067 124.167 30.4922C124.167 30.6532 124.151 30.7979 124.12 30.9258C124.088 31.0547 124.041 31.1835 123.978 31.3115L116.081 50.829C115.922 51.1505 115.631 51.3987 115.205 51.5759C114.78 51.7519 114.314 51.841 113.811 51.841C113.274 51.841 112.794 51.7519 112.368 51.5759ZM127.253 51.3676C126.796 51.0144 126.567 50.6288 126.567 50.2108V29.8845C126.567 29.4024 126.796 29.0095 127.253 28.7038C127.71 28.399 128.301 28.2461 129.027 28.2461C129.72 28.2461 130.311 28.399 130.8 28.7038C131.288 29.0095 131.533 29.4024 131.533 29.8845V50.2108C131.533 50.6288 131.288 51.0144 130.8 51.3676C130.311 51.7214 129.72 51.8976 129.027 51.8976C128.301 51.8976 127.71 51.7214 127.253 51.3676ZM160.969 51.5999C160.622 51.4389 160.37 51.1505 160.213 50.7326L152.882 31.2632C152.819 31.1027 152.764 30.9498 152.717 30.8054C152.669 30.6608 152.646 30.5404 152.646 30.4438C152.646 30.0268 152.819 29.6655 153.166 29.3597C153.513 29.0546 153.93 28.8054 154.419 28.6127C154.908 28.42 155.373 28.3236 155.815 28.3236C156.161 28.3236 156.476 28.3957 156.76 28.5404C157.044 28.685 157.233 28.9184 157.328 29.2391L162.577 44.2266L166.597 30.9258C166.754 30.4438 166.991 30.139 167.306 30.01C167.621 29.8821 167.968 29.8175 168.347 29.8175C168.756 29.8175 169.119 29.8821 169.434 30.01C169.749 30.139 169.986 30.4438 170.144 30.9258L174.069 44.3229L179.366 29.2391C179.555 28.6293 180.043 28.3236 180.832 28.3236C181.273 28.3236 181.738 28.4123 182.227 28.5888C182.715 28.7656 183.132 29.0147 183.48 29.3354C183.826 29.657 184 30.0427 184 30.4922C184 30.5884 183.984 30.7174 183.953 30.8778C183.921 31.0388 183.874 31.1668 183.811 31.2632L176.481 50.829C176.354 51.2142 176.11 51.4794 175.748 51.6239C175.385 51.7687 174.983 51.841 174.542 51.841C174.037 51.841 173.603 51.7604 173.241 51.5999C172.878 51.4389 172.634 51.1985 172.508 50.877L168.347 38.4437L164.28 50.7326C164.153 51.1179 163.893 51.3987 163.499 51.5759C163.105 51.7519 162.655 51.841 162.152 51.841C161.71 51.841 161.316 51.7604 160.969 51.5999ZM38.8125 37.1309C38.8901 37.444 38.956 37.7617 39.0082 38.0839C39.1092 38.7075 39.1619 39.3472 39.1619 39.9988C39.1619 40.6504 39.1092 41.29 39.0082 41.9136C38.9071 42.5374 38.7576 43.1452 38.5633 43.7331C38.369 44.321 38.1302 44.8888 37.8509 45.433C37.5716 45.977 37.2515 46.4973 36.8949 46.9898C36.5384 47.4824 36.1453 47.9471 35.7195 48.3801C35.2938 48.8129 34.8354 49.2142 34.3483 49.5796C33.8614 49.9451 33.3458 50.275 32.8056 50.5651C32.2654 50.8553 31.7005 51.1057 31.115 51.3128C31.0509 51.3354 30.9856 51.3555 30.9211 51.3771C33.9369 49.7815 35.4535 45.2871 35.4535 39.9988L35.4533 39.9017C36.4547 39.1944 36.8563 38.4668 36.9815 37.1309H38.8125ZM31.4876 33.5408C32.5324 32.6326 34.3435 33.9161 34.6919 35.4083C34.8722 36.1802 34.6493 37.3579 33.2974 37.4391C31.1617 37.3146 30.2205 34.6423 31.4876 33.5408ZM34.3484 30.4189C33.8614 30.0534 33.3459 29.7237 32.8056 29.4336C32.3382 29.1826 31.8513 28.9633 31.3494 28.7742C31.3617 28.7921 31.3732 28.8079 31.384 28.8219C31.9207 29.3839 32.3612 30.6071 32.8201 31.2283C33.5478 31.5425 34.0269 31.8461 34.7185 32.4312C35.1719 32.4312 36.1471 32.4381 36.4532 32.4383C36.2207 32.1544 35.9768 31.8799 35.7195 31.6183C35.2937 31.1854 34.8355 30.7843 34.3484 30.4189ZM41.6601 42.2231C41.5872 41.5834 41.5521 40.9577 41.5521 40.3384C41.5521 37.9545 42.03 35.8199 42.9727 33.9939C43.92 32.158 45.2679 30.7127 46.9787 29.6982C48.788 28.6254 50.7701 28.1079 52.8702 28.1733C56.0216 28.2643 59.0343 29.5401 60.9289 31.5856C61.7442 32.4306 61.7913 33.2034 61.6864 33.7018C61.5339 34.4262 60.9537 35.0529 60.1344 35.3781C59.3237 35.6997 58.3679 35.5147 57.6997 34.9071C56.4549 33.774 54.8495 33.1502 53.179 33.1502C51.2833 33.1502 49.5245 33.9262 48.2266 35.3356C46.9296 36.7437 46.2818 38.5859 46.4026 40.5227C46.6178 43.9719 49.3322 46.7453 52.7166 46.9736C54.5144 47.0951 56.2511 46.5046 57.6099 45.3108L57.6481 45.2811C57.6765 45.2615 57.7049 45.2431 57.7332 45.225C58.9417 44.451 60.1432 44.9872 60.7481 45.8122C61.3481 46.6303 61.5103 47.9453 60.4488 48.8985C58.363 50.7722 55.6829 51.8039 52.9021 51.8039C47.3618 51.8039 42.634 47.7746 41.6601 42.2231ZM135.724 51.1543C135.285 50.9046 135.066 50.5302 135.066 50.0308V30.2153C135.066 29.7159 135.285 29.3412 135.724 29.0917C136.163 28.842 136.638 28.7171 137.148 28.7171H148.05C148.56 28.7171 148.927 28.9409 149.152 29.3882C149.377 29.836 149.489 30.3086 149.489 30.8079C149.489 31.3906 149.367 31.8951 149.122 32.3216C148.877 32.7481 148.519 32.9612 148.05 32.9612H140.832C140.286 32.9612 139.843 33.4124 139.843 33.9693V37.227C139.843 37.7837 140.286 38.235 140.832 38.235H148.164C148.634 38.235 148.991 38.4276 149.236 38.8122C149.481 39.1974 149.604 39.6392 149.604 40.1385C149.604 40.5549 149.491 41.5282 149.267 41.9338C149.042 42.3398 148.674 42.5425 148.164 42.5425H141.131C140.419 42.5425 139.843 43.13 139.843 43.8547V46.2765C139.843 46.8332 140.286 47.2846 140.832 47.2846H148.05C148.519 47.2846 148.877 47.4983 149.122 47.9245C149.367 48.3512 149.489 48.8557 149.489 49.4379C149.489 49.9372 149.377 50.4108 149.152 50.8579C148.927 51.3055 148.56 51.5287 148.05 51.5287H137.148C136.638 51.5287 136.163 51.4038 135.724 51.1543Z"
                        fill="#C4532C"
                    />
                </svg>
            </div>
            <div className="headline flex-col-hcenter">
                <p className="txt-752">Hire perfect employee.</p>
                <p className="txt-544">Find a match for your skills.</p>
            </div>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ivm2vajblje-0%3A109?alt=media&token=1ee8730a-74cf-406b-a4e7-1ddcf715ae9d"
                alt="Not Found"
                className="icons-search"
            />
            {/* <p className="txt-819">Job title, salary, or companies</p> */}
            <input
                className="txt-819"
                type="text"
                onChange={handleChange}
                placeholder="Job title, salary, or companies"
            />
            <div className="line-2"/>
            <div className="group-3">
                <p className="txt-630 flex-hcenter">Explore Now</p>
            </div>

            <div className="group-15 flex-row">
                {cards.map(function (card, index) {
                    return (
                        <div key={index} className="group-11 flex-col-hcenter">
                            <div className="group-569 flex-col">
                                <div className="flex-row">
                                    <img
                                        src="https://i.ibb.co/sm0MkMv/quanta.png"
                                        alt="Not Found"
                                        className="image-13"
                                    />
                                    <img
                                        className="powered-by"
                                        src={card.projectType}
                                        alt=""
                                    />
                                </div>
                                <p className="txt-177">{card.title}</p>
                                <p className="txt-216">{card.subtitle}</p>
                                <div className="flex-row">
                                    <svg
                                        className="location-text"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.1217 20.5C15.2495 20.6915 16 21.031 16 21.4176C16 22.015 14.2075 22.5 12 22.5C9.79252 22.5 8 22.015 8 21.4176C8 21.0486 8.68383 20.7225 9.72689 20.527L9.82492 20.51C9.15754 20.6346 8.72041 20.8154 8.67129 21.0184L8.66667 21.0568C8.66667 21.4552 10.1602 21.7784 12 21.7784L12.3515 21.7744C14.0263 21.7364 15.3333 21.4295 15.3333 21.0568C15.3333 20.8519 14.9385 20.667 14.3049 20.5356L14.1217 20.5ZM11.959 2C15.844 2 19 5.1 19 8.836C19 12.493 14.063 17.899 11.959 21C9.936 17.899 5 12.493 5 8.836C5 5.1 8.156 2 11.959 2ZM12.013 4.002C9.31 4.002 7.058 6.164 7.058 8.957C7.058 11.75 9.31 14.002 12.013 14.002C14.805 14.002 17.058 11.751 17.058 8.957C17.058 6.165 14.806 4.002 12.013 4.002Z"
                                            fill="#A9A9A9"
                                        />
                                    </svg>
                                    <p className="card-location">{card.location}</p>
                                </div>
                                <div className="group-625 flex-row-vend">
                                    <div className="frame-1 flex-row-vcenter-hstart">
                                        <img src="https://i.ibb.co/19Vp6SK/candidates.png" alt=""/>
                                    </div>
                                    <p className="txt-763">Total Candidates</p>
                                </div>
                            </div>
                            <div className="group-7">
                                <p className="txt-877 flex-hcenter">Apply Now</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="group-16 flex-col-hcenter">
                {/* <div>
        <img src="https://i.ibb.co/dm7812H/banner.png" alt="" /> 
      </div> */}
                <p className="txt-953 flex-hcenter">Browse latest jobs</p>
                <p className="txt-568 flex-hcenter">
                    We have listen our top & demandable jobs according to our audience
                    demand. Popular jobs may change, it depends on time & market.
                </p>
            </div>
            <div className="frame-3 flex-row-vstart-hstart">
                <svg
                    width="132"
                    height="12"
                    viewBox="0 0 132 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="6" cy="6" r="5.5" fill="white" stroke="black"/>
                    <circle cx="30" cy="6" r="5.5" fill="white" stroke="black"/>
                    <circle cx="54" cy="6" r="5.5" fill="white" stroke="black"/>
                    <circle cx="78" cy="6" r="5.5" fill="white" stroke="black"/>
                    <circle cx="102" cy="6" r="6" fill="#ACB8DC"/>
                    <circle cx="126" cy="6" r="5.5" fill="white" stroke="black"/>
                </svg>
            </div>
        </div>
    );
};
export default App;
