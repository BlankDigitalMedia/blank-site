import { A } from "./(post)/components/a";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Dave Blank</h3>
            <p className="text-sm text-muted-foreground mb-3">
              AI tools, websites, and automation for Southwest Michigan small businesses.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium bg-accent border border-border rounded">
                <span>🇺🇸</span>
                <span>Veteran-Owned</span>
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="mailto:hello@daveblank.com" className="hover:text-foreground transition-colors">
                  hello@daveblank.com
                </a>
              </p>
              <p>
                <a href="tel:+12694310941" className="hover:text-foreground transition-colors">
                  (269) 431-0941
                </a>
              </p>
              <p className="pt-2">
                Bangor, MI<br />
                Serving Southwest Michigan
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Service Areas</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Bangor</li>
              <li>South Haven</li>
              <li>Kalamazoo</li>
              <li>Grand Rapids</li>
              <li className="pt-2 text-xs">& surrounding areas</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Dave Blank. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <A target="_blank" href="https://twitter.com/isblank_dave" className="hover:text-foreground transition-colors">
            Twitter/X
            </A>
          </div>
        </div>
      </div>
    </footer>
  );
}
