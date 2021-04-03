let s = React.string

module Params = {
  type t = {tutorial: string}
}

type t = {tableOfContents: MarkdownPage.TableOfContents.t}

type props = {
  source: NextMdxRemote.renderToStringResult,
  title: string,
  pageDescription: string,
  tableOfContents: MarkdownPage.TableOfContents.t,
}

@react.component
let make = (~source, ~title, ~pageDescription, ~tableOfContents) => {
  let body = NextMdxRemote.hydrate(source, NextMdxRemote.hydrateParams())
  <>
    <ConstructionBanner
      figmaLink=`https://www.figma.com/file/36JnfpPe1Qoc8PaJq8mGMd/V1-Pages-Next-Step?node-id=430%3A21054`
      playgroundLink=`/play/resources/installocaml`
    />
    <div className="grid grid-cols-9 bg-white">
      <MarkdownPage.TableOfContents content=tableOfContents />
      <div className="col-span-9 lg:col-span-7 bg-graylight relative py-16 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <TitleHeading.MarkdownMedium title pageDescription />
          <MarkdownPage.MarkdownPageBody margins=`mt-6`> body </MarkdownPage.MarkdownPageBody>
        </div>
      </div>
    </div>
  </>
}

let contentEn = {
  tableOfContents: {
    contents: `Contents`, // take this from a generic markdown generic content yaml file, hardcode for now
    headings: [
      {
        name: "Implicit vs. explicit casts",
        headingId: "implicit-vs-explicit-casts",
        subHeadings: [
          {
            subName: "Is implicit or explicit casting better?",
            subHeadingId: "is-implicit-or-explicit-casting-better",
          },
        ],
      },
    ],
  },
}

let getStaticProps = ctx => {
  let params = ctx.Next.GetStaticProps.params
  let contentFilePath = "res_pages/resources/" ++ params.Params.tutorial ++ ".md"
  let fileContents = Fs.readFileSync(contentFilePath)
  let parsed = GrayMatter.matter(fileContents)
  let dataDict = Js.Option.getExn(Js.Json.decodeObject(parsed.data))
  let titleJson = Js.Dict.unsafeGet(dataDict, "title")
  let title = Js.Option.getExn(Js.Json.decodeString(titleJson))
  let pageDescriptionJson = Js.Dict.unsafeGet(dataDict, "pageDescription")
  let pageDescription = Js.Option.getExn(Js.Json.decodeString(pageDescriptionJson))

  let source = parsed.content

  // TODO: parse table of contents from front matter
  let mdSourcePromise = NextMdxRemote.renderToString(source, NextMdxRemote.renderToStringParams())
  mdSourcePromise->Js.Promise.then_(mdSource => {
    let props = {
      source: mdSource,
      title: title,
      pageDescription: pageDescription,
      tableOfContents: contentEn.tableOfContents,
    }
    Js.Promise.resolve({"props": props})
  }, _)
}

let getStaticPaths: Next.GetStaticPaths.t<Params.t> = () => {
  let markdownFiles = Js.Array.filter(// todo: case insensitive
  s => Js.String.endsWith("md", s), Fs.readdirSync("res_pages/resources/"))

  let ret = {
    Next.GetStaticPaths.paths: Array.map(
      f => {Next.GetStaticPaths.params: {Params.tutorial: Js.String.split(".", f)[0]}}, // TODO: better error
      markdownFiles,
    ),
    fallback: false, //TODO: is this value correct?
  }
  Js.Promise.resolve(ret)
}

let default = make