import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SnippetForm({ snippet }) {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            code: snippet ? snippet.data.code : '',
            language: snippet ? snippet.data.language : '',
            description: snippet ? snippet.data.description : '',
            name: snippet ? snippet.data.name : '',
        },
    });
    const router = useRouter();

    const createSnippet = async (data) => {
        const { code, language, description, name } = data;
        try {
            await fetch('/api/createSnippet', {
                method: 'POST',
                body: JSON.stringify({ code, language, description, name }),
                headers: { 'Content-Type': 'application/json'}
            })
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    const updateSnippet = async (data) => {
        const { code, language, description, name } = data;
        const id = snippet.id;
        try {
            await fetch('/api/updateSnippet', {
                method: 'PUT',
                body: JSON.stringify({ code, language, description, name, id }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit(snippet ? updateSnippet : createSnippet)}>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    {...register('name', { required: true })}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="language"
                >
                    Language
                </label>
                <select
                    id="language"
                    name="language"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    {...register('language', { required: true })}
                >
                    <option className="py-1">JavaScript</option>
                    <option className="py-1">HTML</option>
                    <option className="py-1">CSS</option>
                </select>
            </div>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="description"
                >
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    rows="3"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="What does the snippet do?"
                    {...register('description', { required: true })}
                ></textarea>
            </div>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="code"
                >
                    Code
                </label>
                <textarea
                    name="code"
                    id="code"
                    rows="10"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="ex. console.log('helloworld')"
                    {...register('code', { required: true })}
                ></textarea>
            </div>
            <button
                className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                type="submit"
            >
                Save
            </button>
            <Link href="/">
                <a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                    Cancel
                </a>
            </Link>
        </form>
    );
}
