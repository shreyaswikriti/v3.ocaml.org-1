

import * as React from "react";
import * as Markdown from "../../components/Markdown.js";

function LearnIndex$IMG(Props) {
  var src = Props.src;
  return React.createElement("img", {
              className: "float-left mr-2 mb-1",
              src: src
            });
}

function LearnIndex$Button(Props) {
  var children = Props.children;
  var href = Props.href;
  return React.createElement(Markdown.LINK.make, {
              href: href,
              children: React.createElement("a", {
                    className: "whitespace-no-wrap text-center text-white font-bold inline-block px-5 py-3 bg-green-800 rounded"
                  }, children)
            });
}

function LearnIndex$CodeBlock(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: "border border-gray-400 bg-gray-100 mb-3 text-xs p-3 rounded"
            }, React.createElement("pre", undefined, children));
}

function LearnIndex$CardHeader(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: "border-b border-gray-500 mb-3"
            }, React.createElement("h2", {
                  className: "text-2xl font-semibold"
                }, children));
}

function LearnIndex$CardFooter(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "text-sm"
            }, children);
}

function $$default(param) {
  return React.createElement(React.Fragment, undefined, React.createElement(Markdown.H1.make, {
                  children: "Learn"
                }), React.createElement("div", {
                  className: "flex justify-between space-x-4 mb-4"
                }, React.createElement("div", {
                      className: "flex-0 self-start"
                    }, React.createElement("img", {
                          src: "/static/learn-large.svg"
                        })), React.createElement("div", {
                      className: "w-3/5"
                    }, React.createElement("strong", undefined, "What is OCaml?"), " Ocaml is a general purpose\n            industrial-strength programming language with an emphasis on\n            expressiveness and safety. It is the technology of choice in ", React.createElement(Markdown.LINK.make, {
                          href: "/learn/companies",
                          children: "companies"
                        }), " where a single mistake can cost millions and speed matters,\n            and there is an ", React.createElement(Markdown.LINK.make, {
                          href: "/community",
                          children: "active community"
                        }), " that has developed a ", React.createElement(Markdown.LINK.make, {
                          href: "https://opam.ocaml.org/packages/",
                          children: "rich set of libraries"
                        }), ". It\'s also a widely used ", React.createElement(Markdown.LINK.make, {
                          href: "/learn/teaching-ocaml",
                          children: "teaching language"
                        }), ". ", React.createElement("em", {
                          className: "text-xs"
                        }, React.createElement(Markdown.LINK.make, {
                              href: "/learn/description",
                              children: "Read more"
                            }), ".")), React.createElement("div", {
                      className: "flex-1 flex justify-center pt-5"
                    }, React.createElement(LearnIndex$Button, {
                          children: "Install OCaml",
                          href: "/docs/install"
                        }))), React.createElement("div", {
                  className: "flex space-x-8 mb-5"
                }, React.createElement("div", {
                      className: "flex-1"
                    }, React.createElement(LearnIndex$CardHeader, {
                          children: React.createElement(Markdown.LINK.make, {
                                href: "/learn/taste",
                                children: "Code Examples"
                              })
                        }), React.createElement(LearnIndex$CodeBlock, {
                          children: null
                        }, React.createElement("em", undefined, "(* If [1] is the list [e1;...;eN] *)", React.createElement("br", undefined), "(* e1 +. ... +. eN *)", React.createElement("br", undefined)), React.createElement("span", {
                              className: "text-green-700"
                            }, "List"), ".fold_left ( +. ) 0. l", React.createElement("br", undefined), React.createElement("br", undefined), "(* e1 +. ... +. eN *)", React.createElement("br", undefined), React.createElement("span", {
                              className: "text-green-700"
                            }, "List"), ".fold_left ( +. ) 1. l", React.createElement("br", undefined), React.createElement("br", undefined), "(* e1 && ... && eN *)", React.createElement("br", undefined), React.createElement("span", {
                              className: "text-green-700"
                            }, "List"), ".fold_left ( && ) true l", React.createElement("br", undefined), React.createElement("br", undefined), "(* Reverse: [eN;...;e1] *)", React.createElement("br", undefined), React.createElement("span", {
                              className: "text-green-700"
                            }, "List"), ".fold_left", React.createElement("br", undefined), "  (", React.createElement("span", {
                              className: "text-blue-800"
                            }, "fun"), " r e -> e :: r) [] l", React.createElement("br", undefined)), React.createElement(LearnIndex$CardFooter, {
                          children: null
                        }, "See more ", React.createElement(Markdown.LINK.make, {
                              href: "/learn/taste",
                              children: "Code Examples"
                            }), ", ", React.createElement(Markdown.LINK.make, {
                              href: "http://pleac.sourceforge.net/pleac_ocaml/",
                              children: "Pleac"
                            }), ", and ", React.createElement(Markdown.LINK.make, {
                              href: "http://rosettacode.org/wiki/Category:OCaml",
                              children: "Rosetta"
                            }), ".")), React.createElement("div", {
                      className: "flex-1"
                    }, React.createElement(LearnIndex$CardHeader, {
                          children: null
                        }, React.createElement(Markdown.LINK.make, {
                              href: "/learn/tutorials",
                              children: "Tutorials"
                            }), " & ", React.createElement(Markdown.LINK.make, {
                              href: "/learn/faq",
                              children: "FAQ"
                            })), React.createElement(Markdown.UL.make, {
                          children: null
                        }, React.createElement("li", undefined, React.createElement(Markdown.LINK.make, {
                                  href: "/learn/tutorials/up_and_running",
                                  children: "Up and Running"
                                })), React.createElement("li", undefined, React.createElement(Markdown.LINK.make, {
                                  href: "/learn/tutorials/basic",
                                  children: "Basics"
                                })), React.createElement("li", undefined, React.createElement(Markdown.LINK.make, {
                                  href: "/learn/tutorials/structure_of_ocaml_programs",
                                  children: "Structure of OCaml Programs"
                                })), React.createElement("li", undefined, React.createElement(Markdown.LINK.make, {
                                  href: "/learn/tutorials/modules",
                                  children: "Modules"
                                })), React.createElement("li", undefined, React.createElement(Markdown.LINK.make, {
                                  href: "/learn/tutorials/map",
                                  children: "Maps (Dictionaries)"
                                })), React.createElement("li", undefined, React.createElement(Markdown.LINK.make, {
                                  href: "/learn/tutorials/sets",
                                  children: "Sets"
                                })), React.createElement("li", undefined, React.createElement(Markdown.LINK.make, {
                                  href: "/learn/tutorials/hashtbl",
                                  children: "Hash Tables"
                                })), React.createElement("li", undefined, React.createElement(Markdown.LINK.make, {
                                  href: "/learn/tutorials/comparison_of_standard_containers",
                                  children: "Comparison of Standard Containers"
                                })), React.createElement("li", undefined, React.createElement(Markdown.LINK.make, {
                                  href: "/learn/faq",
                                  children: "Frequently Asked Questions"
                                }))), React.createElement(LearnIndex$CardFooter, {
                          children: React.createElement(Markdown.LINK.make, {
                                href: "/learn/tutorials",
                                children: "See full list"
                              })
                        })), React.createElement("div", {
                      className: "flex-1"
                    }, React.createElement(LearnIndex$CardHeader, {
                          children: React.createElement(Markdown.LINK.make, {
                                href: "/learn/books",
                                children: "Books"
                              })
                        }), React.createElement(Markdown.LINK.make, {
                          href: "https://realworldocaml.org/",
                          children: React.createElement("img", {
                                className: "float-left w-5/12 mr-3",
                                src: "/static/real-world-ocaml.jpeg"
                              })
                        }), React.createElement(Markdown.LINK.make, {
                          href: "http://ocaml-book.com/",
                          children: React.createElement("img", {
                                className: "float-left w-5/12 mb-4",
                                src: "/static/OCaml_from_beginning.png"
                              })
                        }), React.createElement("span", {
                          className: "clearfix"
                        }), React.createElement(Markdown.P.make, {
                          children: "There are a number of excellent books, with two new \n            titles published in recent years."
                        }), React.createElement(LearnIndex$CardFooter, {
                          children: React.createElement(Markdown.LINK.make, {
                                href: "/learn/books",
                                children: "See full list"
                              })
                        }))), React.createElement("div", {
                  className: "flex space-x-8 mb-5"
                }, React.createElement("div", {
                      className: "flex-1"
                    }, React.createElement(LearnIndex$CardHeader, {
                          children: React.createElement(Markdown.LINK.make, {
                                href: "/community/media",
                                children: "Online Courses, Slides & Videos"
                              })
                        }), React.createElement("iframe", {
                          className: "max-w-full mb-2",
                          title: "A massive open online course on OCaml",
                          allowFullScreen: true,
                          height: "220",
                          src: "https://www.dailymotion.com/embed/video/x2ymo3x",
                          width: "380"
                        }), React.createElement(Markdown.P.make, {
                          children: null
                        }, React.createElement(Markdown.LINK.make, {
                              href: "https://www.dailymotion.com/video/x2ymo3x_fun-mooc-introduction-to-functional-programming-in-ocaml_school",
                              children: "A massive open online course (MOOC) entirely centered around OCaml"
                            }), React.createElement("em", undefined, " is now available, and runs once a year!"), React.createElement("br", undefined), "Learn more, and ", React.createElement(Markdown.LINK.make, {
                              href: "https://www.fun-mooc.fr/courses/course-v1:parisdiderot+56002+session03/about",
                              children: "register now on the FUN platform!"
                            })), React.createElement("iframe", {
                          className: "max-w-full mb-3 border border-gray-300",
                          title: "Xavier Leroy presents the state of OCaml 4.02",
                          allowFullScreen: true,
                          height: "290",
                          src: "https://www.slideshare.net/slideshow/embed_code/43836300",
                          width: "340"
                        }), React.createElement(Markdown.P.make, {
                          children: null
                        }, "An invited talk by Xavier Leroy explaining the current state of OCaml at the ", React.createElement(Markdown.LINK.make, {
                              href: "/meetings/ocaml/2014",
                              children: "OCaml Users and Developers WOrkshop 2014"
                            }), " in Gothenburg, Sweden (", React.createElement(Markdown.LINK.make, {
                              href: "/meetings/ocaml/2014/OCaml2014-Leroy-slides.pdf",
                              children: "PDF slides"
                            }), ", ", React.createElement(Markdown.LINK.make, {
                              href: "https://www.youtube.com/watch?v=DMzZy1bqj6Q&list=UUP9g4dLR7xt6KzCYntNqYcw",
                              children: "Video"
                            }), ")."), React.createElement("iframe", {
                          className: "max-w-full max-h-full mb-2",
                          title: "Yaron Minsky explains how to program effectively in ML",
                          allowFullScreen: true,
                          height: "170",
                          src: "https://player.vimeo.com/video/14313378"
                        }), React.createElement(Markdown.P.make, {
                          children: "A guest lecture given by Yaron Minsky of Jane Street about how to program \n                effectively in ML. The talk was given as part of the intro computer science class \n                at Harvard, CS51, where the students had spent much of the semester programming in \n                OCaml."
                        }), React.createElement(LearnIndex$CardFooter, {
                          children: React.createElement(Markdown.LINK.make, {
                                href: "/community/media",
                                children: "See more slides and videos"
                              })
                        })), React.createElement("div", {
                      className: "flex-1"
                    }, React.createElement(LearnIndex$CardHeader, {
                          children: React.createElement(Markdown.LINK.make, {
                                href: "/learn/companies",
                                children: "Industrial Users"
                              })
                        }), React.createElement(Markdown.LINK.make, {
                          href: "https://janestreet.com",
                          children: React.createElement(LearnIndex$IMG, {
                                src: "/static/jane-street.jpeg"
                              })
                        }), React.createElement(Markdown.P.make, {
                          children: "Jane Street is a quantitative proprietary trading firm with \n            a unique focus on technology and collaborative problem solvinig. Almost all of \n            our systems are written in OCaml: from statistical research code operating \n            over terabytes of data to systems management tools to our real-time trading \n            infrastructure. And those systems are deployed at real scale: on an average day, \n            our trading represents between 1% and 2% of US equity volume."
                        }), React.createElement(LearnIndex$IMG, {
                          src: "/static/facebook.png"
                        }), React.createElement(Markdown.P.make, {
                          children: null
                        }, "To handle their huge PHP codebase, Facebook developed ", React.createElement(Markdown.LINK.make, {
                              href: "https://github.com/facebook/pfff/wiki/Main",
                              children: "pfff"
                            }), ", a set of tools and APIs to perform static analysis, dynamic analysis, code \n            visualizations, code navigations, and style-preserving source-to-source transformations \n            such as refactorings on source code. They also designed ", React.createElement("em", undefined, "Hack"), ", a new statically typed programming language for HHVM, a fast PHP runtime. \n            See Julien Verlaguet\'s ", React.createElement(Markdown.LINK.make, {
                              href: "http://www.youtube.com/watch?v=gKWNjFagR9k",
                              children: "CUFP talk"
                            }), " and ", React.createElement(Markdown.LINK.make, {
                              href: "http://cufp.org/2013/slides/verlaguet.pdf",
                              children: "slides"
                            }), "."), React.createElement(LearnIndex$CardFooter, {
                          children: React.createElement(Markdown.LINK.make, {
                                href: "/learn/companies",
                                children: "See more companies using OCaml"
                              })
                        })), React.createElement("div", {
                      className: "flex-1"
                    }, React.createElement(LearnIndex$CardHeader, {
                          children: React.createElement(Markdown.LINK.make, {
                                href: "/learn/success",
                                children: "Success Stories"
                              })
                        }), React.createElement(Markdown.LINK.make, {
                          href: "https://ocaml.org/img/unison.png",
                          children: React.createElement(LearnIndex$IMG, {
                                src: "/static/unison-thumb.jpeg"
                              })
                        }), React.createElement(Markdown.P.make, {
                          children: null
                        }, React.createElement(Markdown.LINK.make, {
                              href: "http://www.cis.upenn.edu/%7Ebcpierce/unison/",
                              children: "Unison"
                            }), " is an innovative ", React.createElement("em", undefined, "two-way"), " file synchronizer stemming from the ", React.createElement(Markdown.LINK.make, {
                              href: "http://www.cis.upenn.edu/~bcpierce/papers/index.shtml#Synchronization",
                              children: "latest research"
                            }), ". It is resilient to failures and runs on Windows as well as \n                most flavors of Unix, including MacOSX. OCaml helped the authors to\n                \"organize a large and intricate codebase\"."), React.createElement(Markdown.LINK.make, {
                          href: "https://ocaml.org/img/lexifi.jpg",
                          children: React.createElement(LearnIndex$IMG, {
                                src: "/static/lexifi-thumb.jpeg"
                              })
                        }), React.createElement(Markdown.P.make, {
                          children: null
                        }, "Developed by ", React.createElement(Markdown.LINK.make, {
                              href: "http://www.lexifi.com/",
                              children: "LexiFi"
                            }), " the Modeling Language for Finance (MLFi) is the first formal language that \n                accurately describes the most sophisticated capital market, credit, and investment \n                products. MLFii is implemented as an extension of OCaml."), React.createElement(LearnIndex$IMG, {
                          src: "/static/fftw-thumb.png"
                        }), React.createElement(Markdown.P.make, {
                          children: null
                        }, React.createElement(Markdown.LINK.make, {
                              href: "http://www.fftw.org/",
                              children: "FFTW"
                            }), " is a very Fast Fourier Transform library developed at MIT that competes with \n                vendor-tuned codes while remaining platform independent. The code is generated by ", React.createElement("span", {
                              className: "font-mono border border-gray-400 bg-gray-100 rounded px-1 pt-1"
                            }, "genfft"), ", written in OCaml, that ", React.createElement(Markdown.LINK.make, {
                              href: "http://www.fftw.org/pldi99.ps.gz",
                              children: "\"discovered\" algorithms that were previously unknown"
                            }), ". It was awarded the ", React.createElement(Markdown.LINK.make, {
                              href: "https://en.wikipedia.org/wiki/J._H._Wilkinson_Prize_for_Numerical_Software",
                              children: "J. H. Wilkinson Prize for Numerical Software"
                            }), " that rewards software that \n                \"best addresses all phases of the preparation of high quality numerical software.\""), React.createElement(LearnIndex$CardFooter, {
                          children: React.createElement(Markdown.LINK.make, {
                                href: "/learn/success",
                                children: "See more success stories"
                              })
                        }))));
}

export {
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */